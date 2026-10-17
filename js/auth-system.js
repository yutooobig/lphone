  // 验证已移除，直接进入主界面
  window.ephoneLogout = function () {
    location.reload(); // 保留这个空壳，防止别处调用报错
  };
  console.log('EPhone 验证已移除');
