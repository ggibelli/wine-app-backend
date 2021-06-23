import dfnsFormat from 'date-fns/format';

const formatDate = (stamp: Date, format: string): string => dfnsFormat(stamp, format);

export default formatDate;
