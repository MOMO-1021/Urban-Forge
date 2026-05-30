const fs = require('fs'); 
const path = require('path'); 
const dir = './src/pages/services'; 
const files = fs.readdirSync(dir).filter(f => f.endsWith('.astro') && f !== 'index.astro'); 
const snippet = `
      <div class="architect-cta" style="background: #f9f9f9; border-left: 4px solid var(--color-brushed-brass); padding: var(--spacing-md); margin: var(--spacing-xl) 0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--spacing-md);">
        <div>
          <h4 style="margin: 0 0 0.5rem 0; color: var(--color-matte-black);">Specifying this for a project?</h4>
          <p style="margin: 0; font-size: 0.95rem; color: #555;">Download structural profiles, CAD details, and technical cut-sheets.</p>
        </div>
        <a href="/architects" class="btn btn-secondary" style="font-size: 0.85rem; padding: 0.5rem 1rem; border-color: var(--color-brushed-brass); color: var(--color-brushed-brass);">Get CAD Specs (.ZIP)</a>
      </div>

      <ServiceCTA`;

files.forEach(f => { 
  const p = path.join(dir, f); 
  let content = fs.readFileSync(p, 'utf8'); 
  if(!content.includes('architect-cta')) { 
    const newContent = content.replace(/\s*<ServiceCTA/g, snippet); 
    if(content !== newContent) { 
      fs.writeFileSync(p, newContent); 
      console.log('Updated ' + f); 
    } 
  } 
});
