// http://callmenick.com/post/basic-front-end-testing-with-mocha-chai
process.env.NODE_ENV = 'test';

var mocha = require('mocha');
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var app = require('../app');

chai.use(chaiHttp);

describe('/', function() {
  it('should return the homepage');
});
describe('/public', function() {
  it('should return static assets');
});
describe('/apply', function() {
  it('should return the application form')
});
