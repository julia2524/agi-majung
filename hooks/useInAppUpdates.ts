import { useCallback, useEffect, useRef, useState } from "react";
import { AppState, Platform } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as InAppUpdates from "expo-in-app-updates";

const DISMISSED_VERSION_KEY = "@agi_ma_jung/dismissed_update_version";

interface UseInAppUpdatesReturn {
  isUpdateModalVisible: boolean;
  isUpdating: boolean;
  onUpdate: () => Promise<void>;
  onLater: () => Promise<void>;
}

export function useInAppUpdates(enabled: boolean): UseInAppUpdatesReturn {
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const availableVersionRef = useRef<string | null>(null);
  const isCheckingRef = useRef(false);
  const isUpdatingRef = useRef(false);
  const isMountedRef = useRef(true);

  const checkForUpdates = useCallback(async () => {
    if (
      !enabled ||
      __DEV__ ||
      Platform.OS !== "android" ||
      isCheckingRef.current ||
      isUpdatingRef.current
    ) {
      return;
    }

    isCheckingRef.current = true;

    try {
      const result = await InAppUpdates.checkForUpdate();

      if (!result.updateAvailable) {
        return;
      }

      // 이미 진행 중인 업데이트는 Google Play가 이어서 처리하도록 둔다.
      if (result.updateInProgress) {
        return;
      }

      if (!result.storeVersion) {
        return;
      }

      const storeVersion = String(result.storeVersion);

      const dismissedVersion = await AsyncStorage.getItem(
        DISMISSED_VERSION_KEY,
      );

      if (dismissedVersion === storeVersion) {
        return;
      }

      availableVersionRef.current = storeVersion;

      if (isMountedRef.current) {
        setIsUpdateModalVisible(true);
      }
    } catch (error) {
      console.warn("[아기마중] 업데이트 확인 실패:", error);
    } finally {
      isCheckingRef.current = false;
    }
  }, [enabled]);

  useEffect(() => {
    isMountedRef.current = true;

    if (!enabled) {
      return;
    }

    checkForUpdates();

    const subscription = AppState.addEventListener("change", (nextState) => {
      if (nextState === "active") {
        checkForUpdates();
      }
    });

    return () => {
      isMountedRef.current = false;
      subscription.remove();
    };
  }, [enabled, checkForUpdates]);

  const onUpdate = useCallback(async () => {
    if (isUpdatingRef.current || Platform.OS !== "android") {
      return;
    }

    isUpdatingRef.current = true;
    setIsUpdating(true);

    try {
      const started = await InAppUpdates.startUpdate();

      if (started && isMountedRef.current) {
        setIsUpdateModalVisible(false);
      }
    } catch (error) {
      console.warn("[아기마중] 업데이트 시작 실패:", error);
    } finally {
      isUpdatingRef.current = false;

      if (isMountedRef.current) {
        setIsUpdating(false);
      }
    }
  }, []);

  const onLater = useCallback(async () => {
    if (isUpdatingRef.current) {
      return;
    }

    const version = availableVersionRef.current;

    try {
      if (version) {
        await AsyncStorage.setItem(DISMISSED_VERSION_KEY, version);
      }
    } catch (error) {
      console.warn("[아기마중] 업데이트 설정 저장 실패:", error);
    }

    if (isMountedRef.current) {
      setIsUpdateModalVisible(false);
    }
  }, []);

  return {
    isUpdateModalVisible,
    isUpdating,
    onUpdate,
    onLater,
  };
}
