import {module} from 'angular';

class TempService {
    say () {
        return "Hello, World";
    }
}

module('temp', []).service('tempService', TempService);

export default 'temp'
