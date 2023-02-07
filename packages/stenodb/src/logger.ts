import { join } from 'node:path'
import pico from 'picocolors'
import winston, { createLogger } from 'winston'
import type { Steno } from './types.js'

export class LoggerProvider {
  #path: string
  #options: Steno.LoggerProviderOptions

  #timestampFormatter = winston.format.timestamp({
    format: 'YYYY/MM/DD HH:mm:ss'
  })

  #consoleFormatter = winston.format.printf((info) => {
    const timestamp = this.coloredTimestamp(info.timestamp)
    const level = this.coloredLevel(info.level)
    const message = this.coloredMessage(info.message)
    const args = info.args[0] ? this.coloredJSON(info.args[0]) : ''
    return `${timestamp} ${level} ${message}${args}`
  })

  #fileFormatter = winston.format.printf((info) => {
    const { timestamp, level, message } = info
    const args = info.args[0]
      ? `\n${JSON.stringify(info.args[0], null, 2)}`
      : ''
    return `[${timestamp}] ${level.toUpperCase()} ${message}${args}`
  })

  constructor(path: string, options?: Steno.LoggerProviderOptions) {
    this.#path = path
    this.#options = options ?? { enabled: false }
  }

  private coloredTimestamp(timestamp: string): string {
    return pico.gray(`[${timestamp}]`)
  }

  private coloredMessage(message: string): string {
    return pico.white(message)
  }

  private coloredLevel(level: string): string {
    level = level.toUpperCase()
    switch (level) {
      case 'INFO':
        return pico.green(level)
      case 'WARN':
        return pico.yellow(level)
      case 'ERROR':
        return pico.red(level)
      default:
        return level
    }
  }

  private coloredJSON(json: any): string {
    return `\n${pico.cyan(JSON.stringify(json, null, 2))}`
  }

  createLogger(name: string) {
    const logger = createLogger({
      level: 'silly',
      silent: !this.#options.enabled,
      format: winston.format.json(),
      transports: [
        new winston.transports.Console({
          level: 'verbose',
          format: winston.format.combine(
            this.#timestampFormatter,
            this.#consoleFormatter
          )
        }),
        new winston.transports.File({
          dirname: join(this.#path, 'logs'),
          filename: `${name}.log`,
          format: winston.format.combine(
            this.#timestampFormatter,
            this.#fileFormatter
          )
        })
      ]
    })

    return new Logger(logger)
  }
}

export class Logger {
  #logger: winston.Logger

  constructor(logger: winston.Logger) {
    this.#logger = logger
  }

  info(message: string, ...args: any[]): void {
    this.#logger.info(message, { args })
  }

  warn(message: string, ...args: any[]): void {
    this.#logger.warn(message, { args })
  }

  error(message: string, ...args: any[]): void {
    this.#logger.error(message, { args })
  }
}
