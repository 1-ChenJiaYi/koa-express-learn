const path = require('path');

// 你的路由映射（保持数据结构，但 path 仅用来定位模块）
const routerObj = {
  user: { path: '/user' },
  loadData: {
    path: '/loadData',
    children: {
      urlc: { path: '/loadData' },      // 子路由仍由该模块自身 use 子模块
      query: { path: '/loadData' },
      postjson: { path: '/loadData' },
      pstfile: { path: '/loadData' }
    }
  },
  reqbody: { path: '/reqbody' },
  test: {
    children: {
      errort: { path: '/test/errort' }
    }
  }
};

function walk(node, acc) {
  if (node.children && Object.keys(node.children).length > 0) {
    for (const key of Object.keys(node.children)) {
      walk(node.children[key], acc);
    }
  } else if (node.path) {
    // 统一解析到 ./routes 目录
    const modPath = path.resolve(__dirname, `./routes${node.path}`);
    acc.push(modPath);
  }
}

function collectModules() {
  const acc = [];
  for (const key of Object.keys(routerObj)) {
    walk(routerObj[key], acc);
  }
  return acc;
}

module.exports = function registerRoutes(app) {
  const modules = collectModules();
  for (const mod of modules) {
    const route = require(mod); // 每个模块自身带 prefix
    app.use(route.routes()).use(route.allowedMethods());
  }
};