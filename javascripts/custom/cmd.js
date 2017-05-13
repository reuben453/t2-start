$(function () {
  var mac_div_id = "#tab-osx";
  var windows_div_id = "#tab-windows";
  var linux_div_id = "#tab-linux";

  // if window.location.hash is not present or is present but not equal to one
  // of the three tabs, detect the OS and display the corresponding tab
  if (!window.location.hash || !$.inArray([mac_div_id, windows_div_id, linux_div_id], window.location.hash)) {
    isMac() && $('[href="#tab-osx"]').trigger('click');
    isWindows() && $('[href="#tab-windows"]').trigger('click');
    isLinux() && $('[href="#tab-linux"]').trigger('click');
  }

  // if window.location.hash is present and equal to one of the three tabs, show that tab
  else if (window.location.hash === mac_div_id) {
    $('[href="#tab-osx"]').trigger('click');
  }
  else if (window.location.hash === windows_div_id) {
    $('[href="#tab-windows"]').trigger('click');
  }
  else if (window.location.hash === linux_div_id) {
    $('[href="#tab-linux"]').trigger('click');
  }
});