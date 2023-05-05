const path = require('path');
const chai = require('chai');
const expect = chai.expect;

const parser = require('../../../../index');

describe('SvelteDoc - Failure', () => {
    it('Component have invalid JS syntax should fall into catch block', (done) => {
        parser.parse({
            version: 2,
            filename: path.resolve(__dirname, 'failure.invalid.js.svelte'),
            ignoredVisibilities: []
        }).then(() => {
            done(new Error('Should not be parsed'));
        }).catch(e => {
            expect(e).is.not.null;

            done();
        });
    });
});
