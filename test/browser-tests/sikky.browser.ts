import Sikky from '../../src/sikky.ts';
import add from '../../src/add.ts';

const expect = chai.expect;

describe('Simple tests', () => {

 it('should run a simple TypeScript test', () => {
    expect(true).to.be.true;
 });

 it('should be an function', () => {
        expect(typeof Sikky.b).to.eql('function');
    });

 it('should return sum', () => {
        const sum: number = add(1, 1);
        expect(sum).to.eql(2);
    });
});
