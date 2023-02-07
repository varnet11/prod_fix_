import 'dashboard';
import { on } from 'events';
import 'json';
import 'sql';
import { cookie } from 'server/reply';

const free = require('./traffics/free.json');
const gold = require('./traffics/gold.json');
const iron = require('./traffics/iron.json');
const max = require('./traffics/max.json');
const platinum = require('./traffics/platinum.json');
const stone = require('./traffics/stone.json');
const ultra = require('./traffics/ultra.json');
const wood = require('./traffics/wood.json');


function dashboard_create() {
  var selector = document.getElementById('selector_traffic');

  on.selector = pushBox(free, gold, iron, max, platinum, stone, ultra, wood);

if (money.amount >= selector) {
 money - selector.selectTask.value;
 cookie[addNewElement='traffic:'+selector.selectedTask];
}

<i class="fa fa-money" aria-hidden="true"><i class="fas fa-screwdriver    "></i></i>

}