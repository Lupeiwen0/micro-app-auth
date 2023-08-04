export type Config = {
  scope: "userInfo" | "userLocation" | "address" | "record" | "album" | "camera";
};

export type ExecuteName =
  | "getUserInfo"
  | "getLocation"
  | "chooseAddress"
  | "saveImageToPhotosAlbum"
  | "saveVideoToPhotosAlbum"
  | "chooseImage"
  | "scanCode"
  | "chooseVideo";

export type ExecuteOptions = {
  success?: (res: any) => void;
  fail?: (err: any) => void;
  complete?: (err: any) => void;
  [key: string]: any;
};

class CheckAuthClient {
  private target: any;
  private scopeCode: string;

  constructor(config: Config, _target: any) {
    this.target = _target;
    this.scopeCode = `scope.${config.scope}`;
  }

  checkTargetAuth() {
    return new Promise((resolve, reject) => {
      this.target.getSetting({
        success: (res) => {
          const state = res.authSetting[this.scopeCode];
          if (state || state === undefined) {
            return resolve(true);
          } else if (state === false) {
            this.target.openSetting({
              success: (response) => {
                const backState = response.authSetting[this.scopeCode];
                if (backState) {
                  resolve(backState);
                } else {
                  reject(backState);
                }
              },
            });
          }
        },
        fail(err) {
          reject({ type: "getSetting fail", err });
        },
      });
    });
  }

  async execute(name: ExecuteName, options: ExecuteOptions) {
    await this.checkTargetAuth();
    this.target[name](options);
  }
}

export default CheckAuthClient;
