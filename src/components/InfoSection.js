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
{`@ARTICLE{jeong2025-seepersea,
  author={Jeong, Mingi and Chadda, Arihant and Ren, Ziang and Zhao, Luyang and Liu, Haowen and Zhang, Aiwei and Jiang, Yitao and Achong, Sabriel and Lensgraf, Samuel and Roznere, Monika and Li, Alberto Quattrini},
  journal={IEEE Transactions on Field Robotics}, 
  title={SeePerSea: Multimodal Perception Dataset of In-Water Objects for Autonomous Surface Vehicles}, 
  year={2025},
  volume={2},
  number={},
  pages={737-752},
  keywords={Laser radar;Cameras;Sensors;Object detection;Robot vision systems;Radar tracking;Navigation;Global Positioning System;Calibration;Training;Autonomous surface vehicle (ASV);maritime perception;multimodal dataset;obstacle classification;obstacle detection;situational awareness},
  doi={10.1109/TFR.2025.3602937}}
`}
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
        <dl className="newslist">
          <dt>2025.08.13</dt>
          <dd>Our paper was accepted to IEEE <a href="https://ieeexplore.ieee.org/document/11142348/" target="_blank" rel="noopener noreferrer">T-FR</a> and available online.</dd>
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