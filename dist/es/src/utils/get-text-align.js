var TEXT_ALIGN_VALUES = ['left', 'right', 'center', 'justify', 'inherit'];

export function getTextAlign(value) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'center';

  if (value && TEXT_ALIGN_VALUES.includes(value)) {
    return value;
  }
  return fallback;
}