$(function () {
  isMac() && $('[href="#tab-osx"]').trigger('click');
  isWindows() && $('[href="#tab-windows"]').trigger('click');
  isLinux() && $('[href="#tab-linux"]').trigger('click');
});