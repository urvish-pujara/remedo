module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow components without "atom" in the name and with props other than "style"',
      category: 'Best Practices',
      recommended: true,
    },
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        const { name, attributes } = node;

        if (name.type === 'JSXIdentifier' && !name.name.includes('atom') && attributes.length > 1) {
          const hasInvalidProp = attributes.some(
            (attr) => attr.type === 'JSXAttribute' && attr.name.name !== 'style'
          );

          if (hasInvalidProp) {
            context.report({
              node,
              message: 'Only atomic components are allowed to pass data inside the "p" prop.',
            });
          }
        }
      },
    };
  },
};
