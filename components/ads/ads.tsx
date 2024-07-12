"use client";

import { AdsWrapper } from "@/components/wrappers/ad-wrapper";
import ClientWrapper from "@/components/wrappers/client-wrapper";
import { useAdState } from "@/state";

export const Ad1 = () => {
  const adData = useAdState((state) => state.adCode);
  return (
    <ClientWrapper>
      <AdsWrapper
        id={adData[0].id}
        label={adData[0].label}
        size={adData[0].size}
      />
    </ClientWrapper>
  );
};

export const Ad2 = () => {
  const adData = useAdState((state) => state.adCode);
  return (
    <ClientWrapper>
      <AdsWrapper
        id={adData[1].id}
        label={adData[1].label}
        size={adData[1].size}
      />
    </ClientWrapper>
  );
};

export const Ad3 = () => {
  const adData = useAdState((state) => state.adCode);
  return (
    <ClientWrapper>
      <AdsWrapper
        id={adData[2].id}
        label={adData[2].label}
        size={adData[2].size}
      />
    </ClientWrapper>
  );
};

export const Ad4 = () => {
  const adData = useAdState((state) => state.adCode);
  return (
    <ClientWrapper>
      <AdsWrapper
        id={adData[3].id}
        label={adData[3].label}
        size={adData[3].size}
      />
    </ClientWrapper>
  );
};

export const Ad5 = () => {
  const adData = useAdState((state) => state.adCode);
  return (
    <ClientWrapper>
      <AdsWrapper
        id={adData[4].id}
        label={adData[4].label}
        size={adData[4].size}
      />
    </ClientWrapper>
  );
};


export const SmallAd = () => {
  const adData = useAdState((state) => state.adCode);
  return (
    <ClientWrapper>
      <AdsWrapper
        id={adData[5].id}
        label={adData[5].label}
        size={adData[5].size}
        divSize={{
          x: parseInt(adData[5].size[0] as any),
          y: parseInt(adData[5].size[1] as any),
        }}
      />
    </ClientWrapper>
  );
};
