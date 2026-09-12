import zin from '@zinkawaii/stylelint-config'

export default zin({
	overrides: [{
		files: ['**/*.scss'],
		customSyntax: 'postcss-scss',
	}, {
		files: ['**/*.scss', '**/*.vue'],
		rules: { 'media-query-no-invalid': null },
	}],
	// @keep-sorted
	rules: {
		'@stylistic/indentation': 'tab',
		'@stylistic/linebreaks': null,
		'at-rule-no-unknown': [true, { ignoreAtRules: ['each', 'include', 'mixin'] }],
		'media-feature-range-notation': 'prefix',
	},
})
