import dfnsFormat from 'date-fns/format';

export const formatDate = (stamp: Date, format: string): string =>
  dfnsFormat(stamp, format);
