/* eslint-disable import/no-extraneous-dependencies, import/extensions */
import Matreshka from 'src';
import MatreshkaOnly from 'src/matreshka';
import initMK from 'src/_core/init';
import defineProp from 'src/_core/defineprop';

describe('Matreshka class', () => {
    const universalMethodsNames = `on,
        once,
        onDebounce,
        off,
        trigger,
        calc,
        bindNode,
        unbindNode,
        bindOptionalNode,
        bindSandbox,
        parseBindings,
        select,
        selectAll,
        set,
        remove,
        instantiate,
        mediate`.split(/\s*,\s*/);

    it('an instance should have isMatreshka=true property', () => {
        const obj = new Matreshka();
        expect(obj.isMatreshka).toEqual(true);
    });

    it('an instance should have nodes and $nodes properties', () => {
        const obj = new Matreshka();
        expect(typeof obj.nodes).toEqual('object');
        expect(typeof obj.$nodes).toEqual('object');
    });

    it('includes all instance methods', () => {
        const obj = new Matreshka();
        for (let i = 0; i < universalMethodsNames.length; i++) {
            const name = universalMethodsNames[i];
            expect(typeof obj[name]).toEqual('function');
        }

        expect(typeof obj._afterInit).toEqual('function');

        // test selectAll alias
        expect(typeof obj.$).toEqual('function');
        expect(obj.$).toEqual(obj.selectAll);
    });

    it('includes all static members', () => {
        for (let i = 0; i < universalMethodsNames.length; i++) {
            const name = universalMethodsNames[i];
            expect(typeof Matreshka[name]).toEqual('function');
        }

        expect(typeof Matreshka.binders).toEqual('object');
        expect(typeof Matreshka.parserBrackers).toEqual('object');
        expect(typeof Matreshka.defaultBinders).toEqual('object');
        expect(typeof Matreshka.lookForBinder).toEqual('function');
        expect(typeof Matreshka.Class).toEqual('function');
        expect(typeof Matreshka.Array).toEqual('function');
        expect(typeof Matreshka.Object).toEqual('function');
        expect(typeof Matreshka.toMatreshka).toEqual('function');
        expect(typeof Matreshka.useDOMLibrary).toEqual('function');
        expect(typeof Matreshka.chain).toEqual('function');
    });

    it('exports the same thing from index.js and matreshka/index.js', () => {
        expect(Matreshka).toEqual(MatreshkaOnly);
    });

    it('does not allow to get and set "sandbox" property', () => {
        const obj = {};

        initMK(obj);

        defineProp(obj, 'sandbox');

        expect(() => {
            obj.sandbox; // eslint-disable-line no-unused-expressions
        }).toThrow();

        expect(() => {
            obj.sandbox = 'foo';
        }).toThrow();
    });

    it(`does not allow to get and set "container" property
        when an object has a property isMatreshkaArray=true`, () => {
            const obj = {
                isMatreshkaArray: true
            };

            initMK(obj);

            defineProp(obj, 'container');

            expect(() => {
                obj.container; // eslint-disable-line no-unused-expressions
            }).toThrow();

            expect(() => {
                obj.container = 'foo';
            }).toThrow();
        });
});
