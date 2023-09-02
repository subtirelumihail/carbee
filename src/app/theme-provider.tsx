"use client";
import { CacheProvider } from "@emotion/react";
import { MantineProvider, useEmotionCache } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { QueryClientProvider } from "@tanstack/react-query";
import { useServerInsertedHTML } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { FC, PropsWithChildren } from "react";

import client from "@/services/client";
import defaultTheme from "@/themes/default";

const RootStyleRegistry: FC<PropsWithChildren> = ({ children }) => {
  const cache = useEmotionCache();

  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" "),
      }}
    />
  ));

  return (
    <SessionProvider>
      <QueryClientProvider client={client}>
        <CacheProvider value={cache}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={defaultTheme}
          >
            <Notifications position="top-center" autoClose={5000} />
            <ModalsProvider>{children}</ModalsProvider>
          </MantineProvider>
        </CacheProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default RootStyleRegistry;
