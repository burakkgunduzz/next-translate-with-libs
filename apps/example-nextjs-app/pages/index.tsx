import useTranslation from 'next-translate/useTranslation';
import { Burak } from '../../../libs/burak/src';

export function Index() {
  const { t } = useTranslation('common');
  return (
    <>
      <h1>{t('example')}</h1>
      <Burak />
    </>
  );
}

export default Index;
