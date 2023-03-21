import useTranslation from 'next-translate/useTranslation'

export function Index() {
  const { t } = useTranslation('common')

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <h1>{t("example")}</h1>
  );
}

export default Index;
