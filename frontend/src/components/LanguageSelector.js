function LanguageSelector({ language, setLanguage }) {

  return (

    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
    >

      <option value="63">JavaScript</option>

      <option value="71">Python</option>

      <option value="54">C++</option>

      <option value="62">Java</option>

    </select>

  );

}

export default LanguageSelector;