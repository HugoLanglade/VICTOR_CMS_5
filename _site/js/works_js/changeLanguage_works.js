function changeLanguage(lang) {
  const containersTitreFr = document.querySelectorAll('.container_titre_fr');
  const containersTitreEn = document.querySelectorAll('.container_titre_en');
  const textesProjetsFr = document.querySelectorAll('.texte_projets_fr');
  const textesProjetsEn = document.querySelectorAll('.texte_projets_en');

  if (lang === 'fr') {
      containersTitreFr.forEach(container => container.style.display = 'flex');
      containersTitreEn.forEach(container => container.style.display = 'none');
      textesProjetsFr.forEach(text => text.style.display = 'block');
      textesProjetsEn.forEach(text => text.style.display = 'none');
  } else if (lang === 'en') {
      containersTitreFr.forEach(container => container.style.display = 'none');
      containersTitreEn.forEach(container => container.style.display = 'flex');
      textesProjetsFr.forEach(text => text.style.display = 'none');
      textesProjetsEn.forEach(text => text.style.display = 'block');
  }
}
