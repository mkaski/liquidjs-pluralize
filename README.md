# liquidjs-pluralize

# Usage

```

import Liquid from 'liquidjs';
import liquidjsPluralize from 'liquidjs-pluralize';

const liquid = new Liquid();
liquid.plugin(liquidjsPluralize);

const template = "2 {{ 2 | pluralize: 'car', 'cars' }}";
liquid.parseAndRender(template).then(html => console.log(html)); // 2 cars

```

# Template example

```
I have 2 {{ 2 | pluralize: 'car', 'cars' }}

'I have 2 cars'
```

# Output

```
"99 {{ 99 | pluralize: 'car', 'cars' }}"
'99 cars'

"99 {{ 99 | pluralize: 'car' }}"
'99 cars'

"0 {{ 0 | pluralize: 'car' }}"
'0 cars'

"1 {{ 1 | pluralize: 'car', 'cars' }}"
'1 car'

"1 {{ 1 | pluralize: 'car' }}"
'1 car'

```