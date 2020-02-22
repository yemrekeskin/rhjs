const rhjs = require('./index');

test('api request - get', () => {

    const success = result => {
        // console.log(result);
        expect(result).toBeDefined();
    };

    var url = 'https://jsonplaceholder.typicode.com/todos';
    rhjs.get(url, success);
});