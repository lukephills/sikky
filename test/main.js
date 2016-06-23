const testContext = require.context('../test', true, /\.*(browser|node).ts(x?)$/);
const modules = testContext.keys().map(testContext);