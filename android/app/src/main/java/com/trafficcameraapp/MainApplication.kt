package com.trafficcameraapp

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.soloader.SoLoader
import com.trafficcameraapp.TFLiteModule
import com.trafficcameraapp.TFLiteReactPackage
class MainApplication : Application(), ReactApplication {

  private val mReactNativeHost: ReactNativeHost = object : DefaultReactNativeHost(this) {
    override fun getUseDeveloperSupport(): Boolean {
      return BuildConfig.DEBUG
    }

    override fun getPackages(): List<ReactPackage> {
      // Retrieve default packages and add my custom module
      return PackageList(this).packages.apply {

        add(TFLiteReactPackage())
      }
    }

    override fun getJSMainModuleName(): String {
      return "index"
    }

    override val isNewArchEnabled: Boolean
      get() = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED

    override val isHermesEnabled: Boolean
      get() = BuildConfig.IS_HERMES_ENABLED
  }

  override fun getReactNativeHost(): ReactNativeHost {
    return mReactNativeHost
  }

  override fun onCreate() {
    super.onCreate()
    SoLoader.init(this, /* native exopackage */ false)
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      DefaultNewArchitectureEntryPoint.load()
    }
  }
}
