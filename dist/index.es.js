class o {
  constructor(t, e) {
    this.target = e, this.scopeCode = `scope.${t.scope}`;
  }
  checkTargetAuth() {
    return new Promise((t, e) => {
      this.target.getSetting({
        success: (s) => {
          const i = s.authSetting[this.scopeCode];
          if (i || i === void 0)
            return t(!0);
          i === !1 && this.target.openSetting({
            success: (a) => {
              const c = a.authSetting[this.scopeCode];
              c ? t(c) : e(c);
            }
          });
        },
        fail(s) {
          e({ type: "getSetting fail", err: s });
        }
      });
    });
  }
  async execute(t, e) {
    await this.checkTargetAuth(), this.target[t](e);
  }
}
export {
  o as default
};
//# sourceMappingURL=index.es.js.map
