import * as angular from 'angular';
import 'angular-mocks';
import tempModule from '../src/temp.service';

describe('navbar', function () {
    let content;
    beforeEach(angular.mock.module(tempModule));
    beforeEach(angular.mock.inject(function (tempService) {
        content = tempService.say()
    }));
    it('Controller测试', function () {
        expect(content).toBe('Hello, World');
        console.log("???");
    });
});