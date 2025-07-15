import React from 'react'

export default function InfoSection() {
  return (
    <div className="info-section">
      <div className="row">
        <h3 className="info-header">Copyright</h3>
        <p>All datasets and benchmarks on this page are copyright by us.</p>
      </div>
      <div className="row">
        <h3 className="info-header">Citation</h3>
        <p>When using this dataset in your research, please cite the following.</p>
        <div className="bibtexref jeong2024multi bd-code-snippet" style={{ display: 'block' }}>
          <div className="highlight">
            <pre className="citation-block">
{`@article{jeong2024multi,
    title={Multi-modal Perception Dataset of In-water Objects for Autonomous Surface Vehicles},
    author={Jeong, Mingi and Chadda, Arihant and Ren, Ziang and Zhao, Luyang and Liu, Haowen and Roznere, 
        Monika and Zhang, Aiwei and Jiang, Yitao and Achong, Sabriel and Lensgraf, Samuel 
        and Alberto Quattrini Li},
    journal={arXiv preprint arXiv:2404.18411},
    year={2024}
    }`}
            </pre>
          </div>
        </div>
      </div>
      <div className="row">
        <h3 className="info-header">Changelog</h3>
        <dl className="newslist">
          <dt>2024.12.07</dt>
          <dd>The SeePerSea dataset goes online.</dd>
        </dl>
      </div>
      <div className="row">
        <h3 className="info-header">Privacy</h3>
        <p>
          This dataset was collected in public spaces and is for non-commercial use only. 
          We take privacy very seriously and we implemented strategies to remove any identification. 
          However, if you find yourself or personal belongings in this dataset and feel not comfortable about it, 
          please contact us and we will take immediate resolution steps.
        </p>
      </div>
    </div>
  )
} 