import config from './base/config';
import logger from './base/logger';

/* Tests */
import '.';

describe('the package', () => {
	test('the integrity of the export', () => {
		expect(global.appLayer).toEqual({
			config,
			logger,
		});
	});
});
