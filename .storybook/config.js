import { configure, addDecorator } from '@storybook/react';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context("../src", true, /\.(story|stories)\.js?$/));
}

configure(loadStories, module);
