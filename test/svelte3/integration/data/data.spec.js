const path = require('path');
const chai = require('chai');
const expect = chai.expect;

const parser = require('../../../../index');

describe('SvelteDoc v3 - Props', () => {
    it('Private data should be parsed with comment and additional metadata', (done) => {
        parser.parse({
            version: 3,
            filename: path.resolve(__dirname, 'data.private.svelte'),
            features: ['data'],
            ignoredVisibilities: []
        }).then((doc) => {
            expect(doc, 'Document should be provided').to.exist;
            expect(doc.data, 'Document events should be parsed').to.exist;

            expect(doc.data.length).to.equal(1);
            const prop = doc.data[0];
            expect(prop.name).to.equal('variableWithDefault');
            expect(prop.visibility).to.equal('private');
            expect(prop.static).to.be.false;

            expect(prop.description).to.equal('The variable comment.');

            expect(prop.type).to.exist;
            expect(prop.type).to.eql({ kind: 'type', text: 'string', type: 'string' });

            done();
        }).catch(e => {
            done(e);
        });
    });

    it('Public data should be parsed', (done) => {
        parser.parse({
            version: 3,
            filename: path.resolve(__dirname, 'data.public.svelte'),
            features: ['data'],
            ignoredVisibilities: []
        }).then((doc) => {
            expect(doc, 'Document should be provided').to.exist;
            expect(doc.data, 'Document events should be parsed').to.exist;

            expect(doc.data.length).to.equal(1);
            const prop = doc.data[0];
            expect(prop.name).to.equal('variable');
            expect(prop.visibility).to.equal('public');
            expect(prop.static).to.be.false;

            done();
        }).catch(e => {
            done(e);
        });
    });

    it('Static data should be parsed', (done) => {
        parser.parse({
            version: 3,
            filename: path.resolve(__dirname, 'data.static.svelte'),
            features: ['data'],
            ignoredVisibilities: []
        }).then((doc) => {
            expect(doc, 'Document should be provided').to.exist;
            expect(doc.data, 'Document events should be parsed').to.exist;

            expect(doc.data.length).to.equal(1);
            const prop = doc.data[0];
            expect(prop.name).to.equal('staticVariable');
            expect(prop.static).to.be.true;

            done();
        }).catch(e => {
            done(e);
        });
    });

    it('Multiple data declarations should be parsed', (done) => {
        parser.parse({
            version: 3,
            filename: path.resolve(__dirname, 'data.multiple.svelte'),
            features: ['data'],
            ignoredVisibilities: []
        }).then((doc) => {
            expect(doc, 'Document should be provided').to.exist;
            expect(doc.data, 'Document events should be parsed').to.exist;

            expect(doc.data.length).to.equal(3);
            
            expect(doc.data[0].name).to.equal('a');
            expect(doc.data[0].visibility).to.equal('private');

            expect(doc.data[1].name).to.equal('b');
            expect(doc.data[1].visibility).to.equal('private');

            expect(doc.data[2].name).to.equal('c');
            expect(doc.data[2].visibility).to.equal('private');

            done();
        }).catch(e => {
            done(e);
        });
    });

    it('Object pattern prop declaration should be parsed', (done) => {
        parser.parse({
            version: 3,
            filename: path.resolve(__dirname, 'data.objectPattern.svelte'),
            features: ['data'],
            ignoredVisibilities: []
        }).then((doc) => {
            expect(doc, 'Document should be provided').to.exist;
            expect(doc.data, 'Document events should be parsed').to.exist;

            expect(doc.data.length).to.equal(3);
            
            expect(doc.data[0].name).to.equal('a');
            expect(doc.data[0].visibility).to.equal('private');

            expect(doc.data[1].name).to.equal('b');
            expect(doc.data[1].visibility).to.equal('private');

            expect(doc.data[2].name).to.equal('c');
            expect(doc.data[2].visibility).to.equal('private');

            done();
        }).catch(e => {
            done(e);
        });
    });
});