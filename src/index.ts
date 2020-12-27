import * as IntSuccM from './int-successor';
import * as StringSuccM from './string-successor';
import * as Test from './mk-mdo-test';

const IntSucc = Test.val(IntSuccM);
const StringSucc = Test.val(StringSuccM);

Test.Make(IntSucc).run();
Test.Make(StringSucc).run();
