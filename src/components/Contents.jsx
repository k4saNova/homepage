import React, { useState } from 'react';
import './specify.css';

const renderProfile = () => {
    return (
        <div className="container">
          <div className="v-margin-20px"></div>
          <div className="tile is-ancestor">
	    <div className="tile is-half is-vertical is-parent">
              <div className="tile is-child box">
                <p className="title">自己紹介</p>
	        <div  className="content">
                  <p>名前 (なまえ) : 浅野 孝平 (あさの こうへい)</p>
                  <p>所属: 東北大学情報科学研究科 全研究室 博士1年</p>
                  <p>Mail: asano[あっと]dais.is.tohoku.ac.jp</p>
	          <p>CV is <a href="#" target="_blank">here</a>.</p>
	        </div>
              </div>
              <div className="tile is-child box">
                <p className="title">経歴</p>
	        <div className="content">
                  <ul>
		    <li>2019-04: 東北大学大学院 情報科学研究科 博士後期過程 入学</li>
		    <li>2019-03: 東北大学大学院 情報科学研究科 博士前期課程 修了</li>
		    <li>2017-04: 東北大学大学院 情報科学研究科 博士前期課程 入学</li>
		    <li>2017-03: 東北大学工学部 情報知能システム総合学科 卒業</li>
		    <li>2015-04: 東北大学工学部 情報知能システム総合学科 編入学</li>
		    <li>2015-03: 富山高等専門学校 電気制御システム工学科 卒業</li>
                  </ul>
	        </div>
              </div>
	    </div>
	    <div className="tile is-parent is-vertical">
              <div className="tile is-child box">
                <p className="title">TA / RA</p>
	        <div className="content">
                  <h4>TA</h4>
	          <ul>
                    <li>2019-10 -- 03: 創造工学研修 (L-System) </li>
		    <li>2019-04 -- 08: 情報基礎A-1, A-2: VBAプログラミング</li>
                    <li>2018-10 -- 03: 創造工学研修 (探索アルゴリズム) </li>
                    <li>2018-04 -- 08: 情報基礎A-1, A-2: VBAプログラミング</li>
                    <li>2017-10 -- 03: 創造工学研修 (探索アルゴリズム) </li>
                    <li>2017-10 -- 03: 情報基礎演習: Cプログラミング</li>
                    <li>2017-04 -- 08: 情報基礎A-1, A-2: VBAプログラミング</li>
	          </ul>
	          <h4>RA</h4>
	          <ul>
		    <li>2018-04 --: ImPACT "タフロボティクスチャレンジ"</li>
	          </ul>
	        </div>
	      </div>
              <div className="tile is-child box">
	        <div className="content">
	          <h2>受賞など</h2>
	          <ul>
		    <li>2018: <a href="http://gp-ds.tohoku.ac.jp/">東北大学データ科学国際共同大学院</a> 合格</li>
		    <li>2015: 計測自動制御学会北陸支部 優秀学生賞</li>
	          </ul>
	        </div>
	      </div>
	    </div>
          </div>
          
          <div className="tile is-ancestor">
	    <div className="tile is-half is-vertical is-parent">
              <div className="tile is-child box">  
	        <div className="content">	  
	          <h3>プログラミング言語</h3>
	          <p>Nim, Python3, Go, C/C++</p>
                  <p><strong>NIM IS AWESOME</strong></p>
	        </div>
	      </div>
	    </div>
            
	    <div className="tile is-half is-vertical is-parent">
	      <div className="tile is-child box">  
	        <div className="content">
	          <h3>趣味</h3>
	          <p>ゲーム (PC/Console/Board), 海外ドラマ鑑賞 (最近見てない), 酒 (日本酒とウィスキー，ビール), メルカリ</p>
	        </div>
	      </div>
	    </div>
          </div>
          <div className="v-margin-20px"></div>
        </div>
    );
};

const renderResearch = () => {
    return (
        <div className="container">
          <div className="v-margin-20px"></div>
          <div className="tile is-ancestor">
	    <div className="tile is-parent is-vertical">
	      <div className="tile is-child box">
	        <div className="content">
	          <h3>国際学会 / International Conference</h3>
	          <ul>
                    <li><p><strong>K. Asano</strong>, A. Koike, J. Chun and T. Tokuyama, &quot;Model-Agnostic Explanations for Decisions using Minimal Patterns&quot;, The 28th International Conference on Artificial Neural Network (ICANN2019), Part I, LNCS11727, pp. 241--252, Munich, Germany, September, 2019. (refereed, oral presentation) <a href="https://doi.org/10.1007/978-3-030-30487-4_19">[paper]</a></p></li>
                    <li><p><strong>K. Asano</strong>, &quot;Model-Agnostic Explanations for Decisions using Minimal Patterns and its Applications&quot;, The 6th Annual Data Science in Life Sciences and Engineering Symposium, Cleveland, USA, August, 2019. (non-refereed, oral and poster presentation)</p></li>
                    <li><p>Q. Labernia, Y. Kabashima, M. Irie, T. Oike, <strong>K. Asano</strong>, J. Chun and T. Tokuyama, &quot;Large-Scale Taxonomy Problem: a Mixed Machine Learning Approach&quot;, SIGIR 2018 eCom Data Challenge, Ann Arbor, Michigan, USA, July 2018. (refereed, poster presentation) <a href="https://sigir-ecom.github.io/ecom18DCPapers/ecom18DC_paper_4.pdf">[paper]</a></p></li>
                    <li><p>T. Kitamura, and <strong>K. Asano</strong>, &quot;Sparse LS-SVM in the Sorted Empirical Feature Space for Pattern Classification&quot;, The 22nd International Conference on Neural Information Processing (ICONIP2015), Part I, LNCS9489, pp. 549--556, Istanbul, Turkey, 2015. (refereed)</p></li>
                  </ul>
	        </div>
	      </div>
              <div className="tile is-child box">
	        <div className="content">
	          <h3>国内学会 / Domestic Conference in Japan</h3>
                  <ul>
                    <li><p><strong>浅野孝平</strong>, 全眞嬉, &quot;局所領域におけるモデルの模倣による機械学習の説明法&quot;, 第22回情報論的学習理論ワークショップ (IBIS 2019), 愛知, 2019年 11月</p></li>
                    <li><p><strong>浅野孝平</strong>, 全眞嬉, &quot;並列計算による機械学習の説明手法の高速化の検討&quot;, 第18回情報科学技術フォーラム, 岡山, 2019年 9月</p></li>
                    <li><p><strong>浅野孝平</strong>, 全眞嬉, 徳山豪, &quot;特徴パターンを用いた機械学習の説明手法&quot;, 第33回人工知能学会全国大会, 新潟, 2019年 6月</p></li>
                    <li><p><strong>浅野孝平</strong>, 全眞嬉, 徳山豪, &quot;2分決定図を用いた機械学習予測の説明手法&quot;, 第17回情報科学技術フォーラム, 福岡, 2018年 9月</p></li>
                    <li><p><strong>K. Asano</strong>, K. Kikuchi, Q. Larbernia, Y. Kabashima and T. Tokuyama, &quot;Challenge to Long-Term Prediction of Electiricity Load&quot;, Graduate Program in Data Science International Kick-off Symposium, Sendai, February, 2017</p></li>
                    <li><p><strong>浅野孝平</strong>, 北村拓也, &quot;目的関数値に基づいた特徴選択によるスパースLS-SVR&quot;, 第42回 知能システムシンポジウム, 2015年 3月</p></li>
                    <li><p>江渕文人, <strong>浅野孝平</strong>, 北村拓也, &quot;目的関数値に基づいた特徴選択によるスパースLS-SVMの多クラス問題への拡張&quot;, 第42回 知能システムシンポジウム, 2015年 3月</p></li>
                    <li><p><strong>浅野孝平</strong>, 北村拓也, &quot;目的関数値に基づいた特徴選択によるスパースLS-SVM&quot;, 計測自動制御学会 システム・情報部門 学術講演会, 2014月 11月</p></li>
                  </ul>
	        </div>
	      </div>	      
	    </div>
          </div>
          <div className="v-margin-20px"></div>
        </div>  
    );
};

const renderLinks = () => {
    return (
        <div className="container">
          <div className="v-margin-20px"></div>
          <div className="tile is-ancestor">
	    <div className="tile is-parent">
	      <article className="tile is-child box">
	        <p className="title">Schools</p>
	        <ul>
                  <li><a href="https://www.is.tohoku.ac.jp/">東北大学大学院 情報科学研究科</a></li>
	          <li><a href="http://gp-ds.tohoku.ac.jp/">東北大学データ科学国際共同大学院</a></li>
                  <li><a href="https://www.nc-toyama.ac.jp/">富山高等専門学校</a></li>
	        </ul>
	      </article>
	    </div>
	    <div className="tile is-parent">
	      <article className="tile is-child box">
	        <p className="title">Laboratories</p>
	        <ul>
	          <li><a href="http://www.dais.is.tohoku.ac.jp/">全研究室</a></li>
                  <li><a href="http://www.biomdl.ecei.tohoku.ac.jp/">中尾・片山研究室</a></li>
	        </ul>
	      </article>
	    </div>
	    <div className="tile is-parent">
	      <article className="tile is-child box">
	        <p className="title">Activities</p>
	        <ul>
	          <li><a href="https://github.com/k4saNova">GitHub</a></li>
                  <li><a href="https://qiita.com/k4saNova">Qiita</a></li>
	        </ul>
	      </article>
            </div>
          </div>
          <div className="v-margin-20px"></div>
        </div>
    );
};

const Contents = (props) => {
    switch (props.page){
    case "profile":
        return renderProfile();
    case "research":
        return renderResearch();
    case "links":
        return renderLinks();
    default: // home
        return (
            <div>
            </div>);
    }
};

export default Contents;
