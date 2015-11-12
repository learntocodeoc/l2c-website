// http://callmenick.com/post/basic-front-end-testing-with-mocha-chai
process.env.NODE_ENV = 'test';

var mocha = require('mocha');
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var app = require('../app');

chai.use(chaiHttp);

describe('/', function() {
  describe('chai expect: #indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      expect([1,2,3].indexOf(5)).to.equal(-1);
      expect([1,2,3].indexOf(0)).to.equal(-1);
    })
  });
});
describe('/public');
describe('/form');
