process.env.NODE_ENV = 'test';

var mocha = require('mocha');
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var app = require('../app');
var Applicant = require('../models/applicant');

chai.use(chaiHttp);

describe('/applicants', function() {

  // Applicant.collection.drop();
  // Hooks
  beforeEach(function(done) {
    var newApplicant = new Applicant({
      firstName: 'John',
      lastName: 'Smith',
      orgName: 'Org',
      webUrl: 'www.google.com',
      email: 'test@test.com',
      phone: '1234567890',
      services: 'I need a website',
      comments: 'And I need it now!'
    });
    newApplicant.save(function(err) {
      if(err) return done(err);
      done();
    });
  });
  // afterEach(function(done) {
  //   Applicant.collection.drop();
  //   done();
  // });

  // Tests
  it('returns all applicants at /applicants GET', function(done) {
    chai.request(app)
      .get('/applicants')
      .end(function(err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('array');
        expect(res.body[0]).to.have.property('_id');
        expect(res.body[0]).to.have.property('firstName');
        expect(res.body[0].firstName).to.equal('John');
        done();
      });
  });

  it('Returns a single applicant at /applicants/:id GET', function(done) {
    var newApplicant = new Applicant({
      firstName: "Create",
      lastName: "Test"
    });
    newApplicant.save(function(err, data) {
      chai.request(app)
        .get('/applicants/' + data.id)
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.property('_id');
          expect(res.body).to.have.property('firstName');
          expect(res.body.firstName).to.equal('Create');
          done();
        });
    });
  });

  it('Creates an applicant at /applicants/:id POST', function(done) {
    var newApplicant = new Applicant({
      firstName: 'New',
      lastName: 'Guy',
      orgname: 'New Org',
      webUrl: 'www.newsite.com',
      email: 'new@new.com',
      phone: '0123456789',
      services: 'I also need a website',
      comments: 'And I need it yesterday XP'
    });
    chai.request(app)
      .post('/applicants')
      .send(newApplicant)
      .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('object');
        done();
      });
  });

});
