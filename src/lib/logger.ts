import { pino } from 'pino';
import { App } from '@config/default.json';

export default pino({
    enabled: App.logger.enabled,
    level: App.logger.level,
});
