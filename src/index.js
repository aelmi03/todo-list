import './style.css';
import {Task} from './application-logic/Classes';

const abdi = Task("Groceries", "get groceries", "2021/04/21", "high", false, "69");
console.dir(abdi);
console.log(abdi.getCompletionStatus());
abdi.setCompletionStatus(true);
console.log(abdi.getCompletionStatus());

