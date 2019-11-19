import config from './base/config';
import logger from './base/logger';

/* Tests */
import app from '.';

describe('the package', () => {
	test('the integrity of the export', () => {
		expect(app).toEqual({
			config,
			logger,
		});
	});
});
