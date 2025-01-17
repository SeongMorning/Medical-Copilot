'use client';

import Request from '../Request/Request';
import TotalUsage from '../TotalUsage/TotalUsage';
import UsageByModule from '../UsageByModule/UsageByModule';
import styles from './GraphBox.module.scss';

export default function GraphBox() {
  return (
    <div className={`${styles.main} flex flex-col gap-6 min-h-[600px]`}>
      <UsageByModule />
      <div className={`${styles.graph} w-full flex gap-6`}>
        <TotalUsage />
        <Request />
      </div>
    </div>
  );
}
