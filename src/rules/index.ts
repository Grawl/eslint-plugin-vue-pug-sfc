import type { Rule } from 'eslint';
import attributeHyphenation from './attribute-hyphenation';
import componentNameInTemplateCasing from './component-name-in-template-casing';
import noDuplicateAttributes from './no-duplicate-attributes';
import thisInTemplate from './this-in-template';

export default {
  'attribute-hyphenation': attributeHyphenation,
  'component-name-in-template-casing': componentNameInTemplateCasing,
  'no-duplicate-attributes': noDuplicateAttributes,
  'this-in-template': thisInTemplate
} as Record<string, Rule.RuleModule>;
