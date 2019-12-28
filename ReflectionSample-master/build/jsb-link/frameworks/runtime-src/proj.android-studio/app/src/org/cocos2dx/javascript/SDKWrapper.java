package org.cocos2dx.javascript;

import android.content.Context;
import android.content.Intent;
import android.opengl.GLSurfaceView;

public class SDKWrapper {
	private final static boolean PACKAGE_AS = true;
	private static Class<?> mClass = null;

	private static SDKWrapper mInstace = null;
	public static SDKWrapper getInstance() {
		if (null == mInstace){
			mInstace = new SDKWrapper();
			try {
				String fullName = "com.anysdk.framework.PluginWrapper";
				mClass = Class.forName(fullName);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return mInstace;	
	}
	
	public void init(Context context) {
		if (PACKAGE_AS) {
			try {
				mClass.getMethod("init", Context.class).invoke(mClass, context);
			} catch (Exception e) {
				e.printStackTrace();
			}
			SDKWrapper.nativeLoadAllPlugins();
		}
		
	}
	
	public void setGLSurfaceView(GLSurfaceView view) {
		if (PACKAGE_AS) {
			try {
				mClass.getMethod("setGLSurfaceView", GLSurfaceView.class).invoke(mClass, view);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	
	public void onResume() {
		if (PACKAGE_AS) {
			try {
				mClass.getMethod("onResume").invoke(mClass);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

	public void onPause() {
		if (PACKAGE_AS) {
			try {
				mClass.getMethod("onPause").invoke(mClass);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

	public void onDestroy() {
		if (PACKAGE_AS) {
			try {
				mClass.getMethod("onDestroy").invoke(mClass);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

	public void onActivityResult(int requestCode, int resultCode, Intent data) {
		if (PACKAGE_AS) {
			try {
				mClass.getMethod("onActivityResult", int.class, int.class, Intent.class).invoke(mClass, requestCode, resultCode, data);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

	public void onNewIntent(Intent intent) {
		if (PACKAGE_AS) {
			try {
				mClass.getMethod("onNewIntent", Intent.class).invoke(mClass, intent);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

	public void onRestart() {
		if (PACKAGE_AS) {
			try {
				mClass.getMethod("onRestart").invoke(mClass);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}	
	}

	public void onStop() {
		if (PACKAGE_AS) {
			try {
				mClass.getMethod("onStop").invoke(mClass);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	
	private static native void nativeLoadAllPlugins();
}
