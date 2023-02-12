import { useMobileDetection } from "vue3-mobile-detection";

const MobileDetection = {
  install(app) {
    const { isMobile } = useMobileDetection();
    app.config.globalProperties.$isMobile = isMobile ;
  }
};

export default MobileDetection;
