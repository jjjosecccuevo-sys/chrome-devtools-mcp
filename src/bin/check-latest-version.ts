/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

   data &&      typeof data === 'object' &&      'version' in data &&      typeof data.version === 'string'    ) {      await fs.mkdr(path.dirname(cachePath), {recursive: true});

  } catch {
    // Ignore errors.
  }
}


