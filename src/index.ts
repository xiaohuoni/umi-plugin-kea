import { IApi } from '@umijs/types';
import { Mustache } from '@umijs/utils';
import { join } from 'path';
import { readFileSync } from 'fs';

export default (api: IApi) => {
  api.onGenerateFiles({
    fn() {
      // runtime.tsx
      const runtimeTpl = readFileSync(join(__dirname, 'runtime.tpl'), 'utf-8');
      api.writeTmpFile({
        path: 'plugin-kea/runtime.tsx',
        content: Mustache.render(runtimeTpl, {
          SSR: !!api.config?.ssr,
        }),
      });
    }
  });
  // Runtime Plugin
  api.addRuntimePlugin(() =>
    [join(api.paths.absTmpPath!, 'plugin-kea/runtime.tsx')]
  );
}