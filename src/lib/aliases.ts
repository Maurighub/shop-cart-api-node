import * as path from 'path';
import Alias from 'module-alias';

const files = path.resolve(__dirname, '../..');

Alias.addAliases({
    '@config': path.join(files, 'config'),
    '@src': path.join(files, 'src'),
    '@test': path.join(files, 'tests'),
});