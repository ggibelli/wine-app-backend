import cheerio from 'cheerio';

const $ = cheerio.load(`<table class="single_table" data-toggle="table" data-show-refresh="false" data-show-toggle="true" data-show-columns="true" data-search="true" data-pagination="true" data-sort-name="name" data-sort-order="asc" data-click-to-select="true">
                                        <thead>
                                            <tr>
                                                <th data-field="name" data-sortable="true">Vitigno</th>
                                                <th data-field="image" data-sortable="true"></th>
                                                <th data-field="berry_color" data-sortable="true">Colore bacca</th>
                                                <th data-field="product_sector" data-sortable="true">Regione</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/abrusco/" title="Abrusco">Abrusco</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/abrusco-new-2-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="abrusco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/abrusco-new-2-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/abrusco-new-2-160x160.jpg 160w, https://www.quattrocalici.it/wp-content/uploads/2017/06/abrusco-new-2-200x198.jpg 200w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/agiorgitiko/" title="Agiorgitiko">Agiorgitiko</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/08/agiorgitiko-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="agiorgitiko vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/08/agiorgitiko-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/08/agiorgitiko-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/08/agiorgitiko-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/aglianico/" title="Aglianico">Aglianico</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianico-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vitigno aglianico" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianico-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianico-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianico-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                    , <a href="https://www.quattrocalici.it/regione/basilicata/">Basilicata</a>
                                                    , <a href="https://www.quattrocalici.it/regione/puglia/">Puglia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/aglianico-del-vulture/" title="Aglianico del Vulture">Aglianico del Vulture</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianico-vulture-1-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vitigno aglianico del vulture" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianico-vulture-1-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianico-vulture-1-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianico-vulture-1-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/basilicata/">Basilicata</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/aglianicone/" title="Aglianicone">Aglianicone</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianicone-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vitigno aglianicone" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianicone-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianicone-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianicone-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/airen/" title="Airén">Airén</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/08/airen-1-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vitigno airen" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/08/airen-1-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/08/airen-1-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/08/airen-1-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/albana/" title="Albana">Albana</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/albana-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vitigno albana" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/albana-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/albana-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/albana-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/albarino-alvarinho/" title="Albariño (Alvarinho)">Albariño (Alvarinho)</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/08/alvarinho-1-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vitigno alvariño" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/08/alvarinho-1-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/08/alvarinho-1-160x160.jpg 160w, https://www.quattrocalici.it/wp-content/uploads/2020/08/alvarinho-1-235x235.jpg 235w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/albarola/" title="Albarola">Albarola</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/albarola-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vitigno albarola" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/albarola-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/albarola-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/albarola-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/liguria/">Liguria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/albarossa/" title="Albarossa">Albarossa</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/albarossa-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vitigno albarossa" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/albarossa-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/albarossa-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/albarossa-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/aleatico/" title="Aleatico">Aleatico</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/aleatico-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vitigno aleatico" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/aleatico-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/aleatico-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/aleatico-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/alicante/" title="Alicante">Alicante</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/alicante-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="alicante vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/alicante-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/alicante-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/alicante-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/liguria/">Liguria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/alicante-bouschet/" title="Alicante Bouschet">Alicante Bouschet</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/08/alicante-bouschet-1-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vitigno alicante bouschet" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/08/alicante-bouschet-1-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/08/alicante-bouschet-1-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/08/alicante-bouschet-1-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                    , <a href="https://www.quattrocalici.it/regione/sicilia/">Sicilia</a>
                                                    , <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/alionza/" title="Alionza">Alionza</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/alionza-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="alionza vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/alionza-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/alionza-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/alionza-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/ancellotta/" title="Ancellotta">Ancellotta</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/ancellotta-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="ancellotta vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/ancellotta-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ancellotta-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ancellotta-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/ansonica/" title="Ansonica">Ansonica</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/ansonica-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="ansonica vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/ansonica-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ansonica-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ansonica-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/arinto/" title="Arinto">Arinto</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/08/arinto-1-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vitigno arinto" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/08/arinto-1-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/08/arinto-1-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/08/arinto-1-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/arneis/" title="Arneis">Arneis</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/arneis-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="arneis vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/arneis-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/arneis-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/arneis-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/asprinio/" title="Asprinio">Asprinio</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/asprinio-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="asprinio vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/asprinio-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/asprinio-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/asprinio-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/assyrtiko/" title="Assyrtiko">Assyrtiko</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/08/assyrtiko-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="assyrtiko vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/08/assyrtiko-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/08/assyrtiko-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/08/assyrtiko-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/avana/" title="Avanà">Avanà</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/avana-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="avanà vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/avana-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/avana-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/avana-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/avarengo/" title="Avarengo">Avarengo</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/avarengo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="avarengo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/avarengo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/avarengo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/avarengo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/baga/" title="Baga">Baga</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/08/baga-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="baga vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/08/baga-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/08/baga-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/08/baga-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/barbera/" title="Barbera">Barbera</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/barbera-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="barbera vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/barbera-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/barbera-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/barbera-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/barbera-bianca/" title="Barbera bianca">Barbera bianca</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/barbera-bianca-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="barbera bianca vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/barbera-bianca-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/barbera-bianca-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/barbera-bianca-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/barsaglina/" title="Barsaglina">Barsaglina</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/barsaglina-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="barsaglina vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/barsaglina-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/barsaglina-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/barsaglina-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/barzemino/" title="Barzemino">Barzemino</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/marzemino/">Marzemino</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2019/10/marzemino-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="marzemino vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2019/10/marzemino-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2019/10/marzemino-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2019/10/marzemino-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/bellone/" title="Bellone">Bellone</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/bellone-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="bellone vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/bellone-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bellone-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bellone-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lazio/">Lazio</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/bervedino/" title="Bervedino">Bervedino</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/bervedino-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="bervedino vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/bervedino-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bervedino-160x160.jpg 160w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bervedino-235x235.jpg 235w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/berzamino/" title="Berzamino">Berzamino</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/marzemino/">Marzemino</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2019/10/marzemino-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="marzemino vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2019/10/marzemino-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2019/10/marzemino-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2019/10/marzemino-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lombardia/">Lombardia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/berzemino/" title="Berzemino">Berzemino</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/marzemino/">Marzemino</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2019/10/marzemino-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="marzemino vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2019/10/marzemino-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2019/10/marzemino-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2019/10/marzemino-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lombardia/">Lombardia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/bianca-fernanda/" title="Bianca Fernanda">Bianca Fernanda</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/cortese/">Cortese</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/cortese-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="cortese vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/cortese-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cortese-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cortese-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/biancame/" title="Biancame">Biancame</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/biancame-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="biancame vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/biancame-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/biancame-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/biancame-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/marche/">Marche</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/bianchello/" title="Bianchello">Bianchello</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/biancame/">Biancame</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/biancame-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="biancame vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/biancame-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/biancame-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/biancame-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/marche/">Marche</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/bianchetta-genovese/" title="Bianchetta Genovese">Bianchetta Genovese</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/bianchetta-genovese-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="bianchetta genovese vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/bianchetta-genovese-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bianchetta-genovese-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bianchetta-genovese-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/liguria/">Liguria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/bianchetta-trevigiana/" title="Bianchetta Trevigiana">Bianchetta Trevigiana</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/bianchetta-trevigiana-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="bianchetta trevigiana vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/bianchetta-trevigiana-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bianchetta-trevigiana-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bianchetta-trevigiana-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/bianco-di-alessano/" title="Bianco d&#8217;Alessano">Bianco d &#8217;Alessano</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/bianco-alessano-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="bianco d&#039;alessano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/bianco-alessano-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bianco-alessano-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bianco-alessano-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/puglia/">Puglia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/biancolella/" title="Biancolella">Biancolella</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/biancolella-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="biancolella vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/biancolella-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/biancolella-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/biancolella-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/blau-burgunder/" title="Blau burgunder">Blau burgunder</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/pinot-nero/">Pinot nero</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/Pinot-nero-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="Pinot nero vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/Pinot-nero-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/Pinot-nero-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/Pinot-nero-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/blauer-portugieser/" title="Blauer portugieser">Blauer portugieser</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/portoghese/">Portoghese</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/portoghese-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="portoghese vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/portoghese-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/portoghese-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/portoghese-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/blauer-spatburgunder/" title="Blauer spätburgunder">Blauer spätburgunder</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/pinot-nero/">Pinot nero</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/Pinot-nero-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="Pinot nero vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/Pinot-nero-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/Pinot-nero-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/Pinot-nero-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/bobal/" title="Bobal">Bobal</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/08/bobal-1-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vitigno bobal" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/08/bobal-1-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/08/bobal-1-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/08/bobal-1-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/bombino/" title="Bombino">Bombino</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/bombino-bianco/">Bombino bianco</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/bombino-bianco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="bombino bianco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/bombino-bianco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bombino-bianco-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bombino-bianco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/bombino-bianco/" title="Bombino bianco">Bombino bianco</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/bombino-bianco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="bombino bianco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/bombino-bianco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bombino-bianco-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bombino-bianco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/bombino-nero/" title="Bombino nero">Bombino nero</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2019/06/bombino-nero-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="bombino nero vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2019/06/bombino-nero-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2019/06/bombino-nero-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2019/06/bombino-nero-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/basilicata/">Basilicata</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/bonamico/" title="Bonamico">Bonamico</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/bonamico-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="bonamico vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/bonamico-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bonamico-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bonamico-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/bonarda/" title="Bonarda">Bonarda</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/bonarda-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="bonarda vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/bonarda-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bonarda-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bonarda-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/boschera/" title="Boschera">Boschera</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/boschera-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="boschera vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/boschera-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/boschera-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/boschera-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/bosco/" title="Bosco">Bosco</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/bosco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="bosco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/bosco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bosco-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bosco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/liguria/">Liguria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/bovale/" title="Bovale">Bovale</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/bovale-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="bovale vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/bovale-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bovale-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bovale-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/bovale-di-spagna/" title="Bovale di Spagna">Bovale di Spagna</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/bovale-grande/">Bovale grande</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/bovale-grande-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="bovale grande vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/bovale-grande-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bovale-grande-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bovale-grande-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/bovale-grande/" title="Bovale grande">Bovale grande</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/bovale-grande-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="bovale grande vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/bovale-grande-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bovale-grande-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bovale-grande-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/bovaleddu/" title="Bovaleddu">Bovaleddu</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/bovale/">Bovale</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/bovale-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="bovale vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/bovale-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bovale-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bovale-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/bovino/" title="Bovino">Bovino</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/bombino-bianco/">Bombino bianco</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/bombino-bianco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="bombino bianco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/bombino-bianco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bombino-bianco-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bombino-bianco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/bracciola-nera/" title="Bracciola nera">Bracciola nera</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/bracciola-nera-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="bracciola nera vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/bracciola-nera-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bracciola-nera-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bracciola-nera-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/brachetto/" title="Brachetto">Brachetto</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/brachetto-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="brachetto vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/brachetto-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/brachetto-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/brachetto-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/bronner/" title="Bronner">Bronner</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/bronner-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="bronner vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/bronner-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bronner-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bronner-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/brunello/" title="Brunello">Brunello</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/sangiovese/">Sangiovese</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/sangiovese-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="sangiovese vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/sangiovese-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sangiovese-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sangiovese-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/cabernet/" title="Cabernet">Cabernet</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/cabernet-franc/">Cabernet Franc</a>
                                                    , <a href="https://www.quattrocalici.it/vitigni/cabernet-sauvignon/">Cabernet Sauvignon</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/cabernet-sauvignon-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="cabernet sauvignon vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/cabernet-sauvignon-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cabernet-sauvignon-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cabernet-sauvignon-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/cabernet-franc/" title="Cabernet Franc">Cabernet Franc</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/cabernet-franc-1-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="cabernet franc vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/cabernet-franc-1-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cabernet-franc-1-160x160.jpg 160w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cabernet-franc-1-217x220.jpg 217w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                    , <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/cabernet-italiano/" title="Cabernet italiano">Cabernet italiano</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/carmenere/">Carmènere</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/carmenere-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="carmenere vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/carmenere-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/carmenere-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/carmenere-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/cabernet-nostrano/" title="Cabernet nostrano">Cabernet nostrano</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/carmenere/">Carmènere</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/carmenere-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="carmenere vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/carmenere-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/carmenere-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/carmenere-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/cabernet-sauvignon/" title="Cabernet Sauvignon">Cabernet Sauvignon</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/cabernet-sauvignon-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="cabernet sauvignon vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/cabernet-sauvignon-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cabernet-sauvignon-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cabernet-sauvignon-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                    , <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                    , <a href="https://www.quattrocalici.it/regione/abruzzo/">Abruzzo</a>
                                                    , <a href="https://www.quattrocalici.it/regione/molise/">Molise</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/cacchione/" title="Cacchione">Cacchione</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/bellone/">Bellone</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/bellone-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="bellone vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/bellone-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bellone-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bellone-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lazio/">Lazio</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/caddiu/" title="Caddiu">Caddiu</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/caddiu-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="caddiu vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/caddiu-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/caddiu-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/caddiu-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/cagnina/" title="Cagnina">Cagnina</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/terrano/">Terrano</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/terrano-150x150.png" class="attachment-80 size-80 wp-post-image" alt="terrano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/terrano-150x150.png 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/terrano-234x235.png 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/terrano-160x160.png 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/cagniulari/" title="Cagniulari">Cagniulari</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/cagnulari/">Cagnulari</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/cagnulari-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="cagnulari vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/cagnulari-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cagnulari-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cagnulari-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/cagnulari/" title="Cagnulari">Cagnulari</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/cagnulari-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="cagnulari vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/cagnulari-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cagnulari-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cagnulari-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/calabrese/" title="Calabrese">Calabrese</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/calabrese-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="calabrese-nero d&#039;avola vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/calabrese-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/calabrese-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/calabrese-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sicilia/">Sicilia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/canaiolo/" title="Canaiolo">Canaiolo</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/canaiolo-nero/">Canaiolo nero</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/canaiolo-nero-1-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="canaiolo nero vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/canaiolo-nero-1-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/canaiolo-nero-1-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/canaiolo-nero-1-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/umbria/">Umbria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/canaiolo-bianco/" title="Canaiolo bianco">Canaiolo bianco</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/canaiolo-bianco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="canaiolo bianco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/canaiolo-bianco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/canaiolo-bianco-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/canaiolo-bianco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/umbria/">Umbria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/canaiolo-nero/" title="Canaiolo nero">Canaiolo nero</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/canaiolo-nero-1-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="canaiolo nero vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/canaiolo-nero-1-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/canaiolo-nero-1-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/canaiolo-nero-1-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/canina-nera/" title="Canina nera">Canina nera</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/canina-nera-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="canina nera vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/canina-nera-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/canina-nera-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/canina-nera-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/cannonao/" title="Cannonao">Cannonao</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/cannonau/">Cannonau</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/cannonau-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="cannonau vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/cannonau-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cannonau-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cannonau-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/cannonau/" title="Cannonau">Cannonau</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/cannonau-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="cannonau vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/cannonau-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cannonau-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cannonau-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/capolongo/" title="Capolongo">Capolongo</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/capolongo-1-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="capolongo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/capolongo-1-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/capolongo-1-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/capolongo-1-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lazio/">Lazio</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/cari/" title="Cari">Cari</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/pelaverga/">Pelaverga</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pelaverga-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pelaverga vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pelaverga-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pelaverga-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pelaverga-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/caricagiola/" title="Caricagiola">Caricagiola</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/caricagiola-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="caricagiola vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/caricagiola-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/caricagiola-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/caricagiola-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/carignan/" title="Carignan (Cariñena)">Carignan (Cariñena)</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/09/carignan-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="carignan vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/09/carignan-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/09/carignan-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/09/carignan-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/carignano/" title="Carignano">Carignano</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/carignano-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="carignano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/carignano-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/carignano-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/carignano-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/carmenere/" title="Carmènere">Carmènere</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/carmenere-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="carmenere vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/carmenere-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/carmenere-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/carmenere-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/carricante/" title="Carricante">Carricante</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/carricante-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="carricante vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/carricante-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/carricante-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/carricante-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sicilia/">Sicilia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/casavecchia/" title="Casavecchia">Casavecchia</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/casavecchia-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="casavecchia vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/casavecchia-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/casavecchia-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/casavecchia-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/casetta/" title="Casetta">Casetta</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/casetta-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="casetta vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/casetta-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/casetta-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/casetta-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/castelao/" title="Castelão">Castelão</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/08/castelao-1-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="castelao vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/08/castelao-1-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/08/castelao-1-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/08/castelao-1-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/castiglione/" title="Castiglione">Castiglione</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/castiglione-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="castiglione vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/castiglione-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/castiglione-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/castiglione-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/calabria/">Calabria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/catalanesca/" title="Catalanesca">Catalanesca</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/catalanesca-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="catalanesca vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/catalanesca-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/catalanesca-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/catalanesca-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/catarratto/" title="Catarratto">Catarratto</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/catarratto-bianco-comune/">Catarratto bianco comune</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/catarratto-bianco-comune-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="catarratto bianco comune vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/catarratto-bianco-comune-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/catarratto-bianco-comune-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/catarratto-bianco-comune-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sicilia/">Sicilia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/catarratto-bianco-comune/" title="Catarratto bianco comune">Catarratto bianco comune</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/catarratto-bianco-comune-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="catarratto bianco comune vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/catarratto-bianco-comune-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/catarratto-bianco-comune-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/catarratto-bianco-comune-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sicilia/">Sicilia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/catarratto-bianco-lucido/" title="Catarratto bianco lucido">Catarratto bianco lucido</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/catarratto-bianco-lucido-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="catarratto bianco lucido vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/catarratto-bianco-lucido-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/catarratto-bianco-lucido-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/catarratto-bianco-lucido-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sicilia/">Sicilia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/cavrara/" title="Cavrara">Cavrara</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/cavrara-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="cavrara vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/cavrara-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cavrara-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cavrara-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/centesimino/" title="Centesimino">Centesimino</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/centesimino-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="centesimino vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/centesimino-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/centesimino-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/centesimino-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/cesanese/" title="Cesanese">Cesanese</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/cesanese-comune/">Cesanese comune</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/cesanese-comune-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="cesanese comune vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/cesanese-comune-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cesanese-comune-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cesanese-comune-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lazio/">Lazio</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/cesanese-comune/" title="Cesanese comune">Cesanese comune</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/cesanese-comune-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="cesanese comune vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/cesanese-comune-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cesanese-comune-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cesanese-comune-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lazio/">Lazio</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/cesanese-di-affile/" title="Cesanese di Affile">Cesanese di Affile</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/cesanese-di-affile-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="cesanese di affile vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/cesanese-di-affile-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cesanese-di-affile-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cesanese-di-affile-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lazio/">Lazio</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/chardonnay/" title="Chardonnay">Chardonnay</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/chardonnay-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="chardonnay vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/chardonnay-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/chardonnay-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/chardonnay-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/chatus/" title="Chatus">Chatus</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/chatus-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="chatus vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/chatus-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/chatus-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/chatus-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/chenin-blanc/" title="Chenin blanc">Chenin blanc</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/09/chenin-blanc-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="chenin blanc vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/09/chenin-blanc-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/09/chenin-blanc-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/09/chenin-blanc-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/chiavennasca/" title="Chiavennasca">Chiavennasca</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/nebbiolo/">Nebbiolo</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/nebbiolo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="nebbiolo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/nebbiolo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nebbiolo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nebbiolo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lombardia/">Lombardia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/ciliegiolo/" title="Ciliegiolo">Ciliegiolo</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/ciliegiolo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="ciliegiolo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/ciliegiolo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ciliegiolo-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ciliegiolo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/cinsaut/" title="Cinsaut">Cinsaut</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/09/cinsault-1-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="cinsault vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/09/cinsault-1-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/09/cinsault-1-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/09/cinsault-1-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/cococciola/" title="Cococciola">Cococciola</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/cococciola-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="cococciola vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/cococciola-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cococciola-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cococciola-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/abruzzo/">Abruzzo</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/coda-di-volpe/" title="Coda di Volpe">Coda di Volpe</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/coda-di-volpe-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="coda di volpe vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/coda-di-volpe-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/coda-di-volpe-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/coda-di-volpe-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/colombana-bianca/" title="Colombana bianca">Colombana bianca</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/verdea/">Verdea</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/verdea-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="verdea vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/verdea-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/verdea-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/verdea-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lombardia/">Lombardia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/colombard/" title="Colombard">Colombard</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/09/colombard-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="colombard vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/09/colombard-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/09/colombard-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/09/colombard-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/colorino/" title="Colorino">Colorino</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/colorino-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="colorino vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/colorino-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/colorino-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/colorino-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/concord/" title="Concord">Concord</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/09/concord-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="concord vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/09/concord-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/09/concord-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/09/concord-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/corbina/" title="Corbina">Corbina</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/corbina-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="corbina vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/corbina-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/corbina-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/corbina-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/corbinella/" title="Corbinella">Corbinella</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/corbina/">Corbina</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/corbina-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="corbina vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/corbina-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/corbina-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/corbina-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/corinto-nero/" title="Corinto nero">Corinto nero</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/corinto-nero-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="corinto nero vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/corinto-nero-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/corinto-nero-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/corinto-nero-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sicilia/">Sicilia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/cornallin/" title="Cornallin">Cornallin</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/cornallin-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="cornallin vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/cornallin-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cornallin-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cornallin-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-rosa/">Bacca rosa</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/valle-d-aosta/">Valle d &#8217;Aosta</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/cortese/" title="Cortese">Cortese</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/cortese-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="cortese vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/cortese-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cortese-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cortese-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/corvina/" title="Corvina">Corvina</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/corvina-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="corvina vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/corvina-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/corvina-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/corvina-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/corvinone/" title="Corvinone">Corvinone</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/corvinone-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vitigno corvinone" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/corvinone-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/corvinone-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/corvinone-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/croatina/" title="Croatina">Croatina</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/croatina-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="croatina vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/croatina-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/croatina-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/croatina-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lombardia/">Lombardia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/cruina/" title="Cruina">Cruina</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/corvina/">Corvina</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/corvina-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="corvina vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/corvina-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/corvina-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/corvina-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/d-oro/" title="D&#8217;Oro">D &#8217;Oro</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/garganega/">Garganega</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/garganega-1-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="garganega vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/garganega-1-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/garganega-1-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/garganega-1-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/damaschino/" title="Damaschino">Damaschino</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/damaschino-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="damaschino vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/damaschino-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/damaschino-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/damaschino-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sicilia/">Sicilia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/dindarella/" title="Dindarella">Dindarella</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/dindarella-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="dindarella vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/dindarella-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/dindarella-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/dindarella-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/diolinoir/" title="Diolinoir">Diolinoir</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/diolinoir-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="diolinoir vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/diolinoir-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/diolinoir-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/diolinoir-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/valle-d-aosta/">Valle d &#8217;Aosta</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/dolcetto/" title="Dolcetto">Dolcetto</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/dolcetto-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="dolcetto vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/dolcetto-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/dolcetto-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/dolcetto-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                    , <a href="https://www.quattrocalici.it/regione/liguria/">Liguria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/doux-d-henry/" title="Doux d&#8217;Henry">Doux d &#8217;Henry</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/doux-d-henry-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="doux d&#039;henry vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/doux-d-henry-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/doux-d-henry-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/doux-d-henry-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/drupeggio/" title="Drupeggio">Drupeggio</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/canaiolo-bianco/">Canaiolo bianco</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/canaiolo-bianco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="canaiolo bianco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/canaiolo-bianco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/canaiolo-bianco-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/canaiolo-bianco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/umbria/">Umbria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/durella/" title="Durella">Durella</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/durella-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="durella vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/durella-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/durella-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/durella-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/durello/" title="Durello">Durello</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/durella/">Durella</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/durella-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="durella vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/durella-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/durella-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/durella-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/edelvernatsch/" title="Edelvernatsch">Edelvernatsch</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/schiava-grossa/">Schiava grossa</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-grossa-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="schiava grossa vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-grossa-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-grossa-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-grossa-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/ellenica/" title="Ellenica">Ellenica</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/aglianico/">Aglianico</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianico-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vitigno aglianico" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianico-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianico-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianico-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/ellenico/" title="Ellenico">Ellenico</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/aglianico/">Aglianico</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianico-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vitigno aglianico" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianico-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianico-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianico-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/enantio/" title="Enantio">Enantio</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/lambrusco-a-foglia-frastagliata/">Lambrusco a foglia frastagliata</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-foglia-frastagliata-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="lambrusco a foglia frastagliata vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-foglia-frastagliata-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-foglia-frastagliata-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-foglia-frastagliata-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/erbaluce/" title="Erbaluce">Erbaluce</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/erbaluce-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="erbaluce vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/erbaluce-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/erbaluce-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/erbaluce-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/erbamat/" title="Erbamat">Erbamat</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/11/erbamat-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vitigno erbamat" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/11/erbamat-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/11/erbamat-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/11/erbamat-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lombardia/">Lombardia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/falanghina/" title="Falanghina">Falanghina</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/falanghina-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="falanghina vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/falanghina-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/falanghina-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/falanghina-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                    , <a href="https://www.quattrocalici.it/regione/molise/">Molise</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/famoso/" title="Famoso">Famoso</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/famoso-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="famoso vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/famoso-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/famoso-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/famoso-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/favorita/" title="Favorita">Favorita</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/vermentino/">Vermentino</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/vermentino-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vermentino vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/vermentino-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vermentino-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vermentino-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/fenile/" title="Fenile">Fenile</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/11/fenile-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="fenile vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/11/fenile-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/11/fenile-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/11/fenile-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/fernao-pires/" title="Fernão Pires">Fernão Pires</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/09/fernao-pires-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="fernao pires vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/09/fernao-pires-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/09/fernao-pires-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/09/fernao-pires-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/fiano/" title="Fiano">Fiano</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/fiano-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="fiano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/fiano-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/fiano-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/fiano-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/fogarina/" title="Fogarina">Fogarina</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/fogarina-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="fogarina vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/fogarina-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/fogarina-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/fogarina-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/foglia-tonda/" title="Foglia tonda">Foglia tonda</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/foglia-tonda-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="foglia tonda vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/foglia-tonda-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/foglia-tonda-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/foglia-tonda-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/forastera/" title="Forastera">Forastera</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/forastera-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="forastera vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/forastera-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/forastera-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/forastera-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/forestiera/" title="Forestiera">Forestiera</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/forastera/">Forastera</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/forastera-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="forastera vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/forastera-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/forastera-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/forastera-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/forgiarin/" title="Forgiarin">Forgiarin</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2019/08/forgiarin-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="forgiarin vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2019/08/forgiarin-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2019/08/forgiarin-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2019/08/forgiarin-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/fortana/" title="Fortana">Fortana</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/fortana-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="fortana vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/fortana-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/fortana-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/fortana-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/francavidda/" title="Francavidda">Francavidda</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/francavidda-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="francavidda vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/francavidda-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/francavidda-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/francavidda-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/puglia/">Puglia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/francavilla/" title="Francavilla">Francavilla</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/francavidda/">Francavidda</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/francavidda-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="francavidda vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/francavidda-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/francavidda-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/francavidda-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/puglia/">Puglia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/franconia/" title="Franconia">Franconia</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/franconia-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="franconia vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/franconia-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/franconia-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/franconia-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/frappato/" title="Frappato">Frappato</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/frappato-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="frappato vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/frappato-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/frappato-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/frappato-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sicilia/">Sicilia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/frappato-d-italia/" title="Frappato d&#8217;Italia">Frappato d &#8217;Italia</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/frappato/">Frappato</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/frappato-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="frappato vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/frappato-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/frappato-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/frappato-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sicilia/">Sicilia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/freisa/" title="Freisa">Freisa</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/freisa-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="freisa vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/freisa-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/freisa-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/freisa-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/friulano/" title="Friulano">Friulano</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/tocai-friulano/">Tocai Friulano</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/tocai-friulano-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="tocai friulano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/tocai-friulano-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/tocai-friulano-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/tocai-friulano-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/friularo/" title="Friularo">Friularo</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/raboso-piave/">Raboso Piave</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/raboso-piave-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="raboso piave vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/raboso-piave-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/raboso-piave-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/raboso-piave-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/fumin/" title="Fumin">Fumin</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/fumin-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="fumin vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/fumin-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/fumin-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/fumin-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/valle-d-aosta/">Valle d &#8217;Aosta</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/furastiera/" title="Furastiera">Furastiera</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/forastera/">Forastera</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/forastera-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="forastera vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/forastera-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/forastera-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/forastera-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/furmint/" title="Furmint">Furmint</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/09/furmint-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="furmint vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/09/furmint-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/09/furmint-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/09/furmint-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/gaglioppo/" title="Gaglioppo">Gaglioppo</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/gaglioppo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="gaglioppo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/gaglioppo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/gaglioppo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/gaglioppo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/calabria/">Calabria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/gamaret/" title="Gamaret">Gamaret</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/gamaret-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="gamaret vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/gamaret-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/gamaret-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/gamaret-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/valle-d-aosta/">Valle d &#8217;Aosta</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/gamay/" title="Gamay">Gamay</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/gamay-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="gamay vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/gamay-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/gamay-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/gamay-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/gamay-del-trasimeno/" title="Gamay del Trasimeno">Gamay del Trasimeno</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/cannonau/">Cannonau</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/cannonau-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="cannonau vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/cannonau-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cannonau-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/cannonau-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/umbria/">Umbria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/gamba-rossa/" title="Gamba rossa">Gamba rossa</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/gamba-rossa-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="gamba rossa vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/gamba-rossa-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/gamba-rossa-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/gamba-rossa-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/garganega/" title="Garganega">Garganega</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/garganega-1-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="garganega vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/garganega-1-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/garganega-1-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/garganega-1-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/garganego/" title="Garganego">Garganego</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/garganega/">Garganega</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/garganega-1-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="garganega vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/garganega-1-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/garganega-1-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/garganega-1-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/garnacha-tinta/" title="Garnacha tinta">Garnacha tinta</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/grenache/">Grenache (Garnacha)</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/grenache-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="grenache vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/grenache-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/grenache-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2017/06/grenache-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/gelber-muskateller/" title="Gelber Muskateller">Gelber Muskateller</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/moscato-bianco/">Moscato bianco</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-giallo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="moscato giallo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-giallo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-giallo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-giallo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/gewurztraminer/" title="Gewürztraminer">Gewürztraminer</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/traminer-aromatico-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="traminer aromatico vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/traminer-aromatico-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/traminer-aromatico-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/traminer-aromatico-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/ginestra/" title="Ginestra">Ginestra</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/ginestra-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="ginestra vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/ginestra-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ginestra-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ginestra-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/giro/" title="Girò">Girò</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/giro-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="girò vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/giro-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/giro-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/giro-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/glera/" title="Glera">Glera</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/glera-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="glera vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/glera-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/glera-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/glera-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/glera-lunga/" title="Glera lunga">Glera lunga</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/glera-lunga-1-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="glera lunga vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/glera-lunga-1-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/glera-lunga-1-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/glera-lunga-1-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/glianica/" title="Glianica">Glianica</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/aglianico/">Aglianico</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianico-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vitigno aglianico" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianico-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianico-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianico-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/glianico/" title="Glianico">Glianico</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/aglianico/">Aglianico</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianico-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vitigno aglianico" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianico-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianico-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/aglianico-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/goldmuskateller/" title="Goldmuskateller">Goldmuskateller</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/moscato-giallo/">Moscato giallo</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-giallo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="moscato giallo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-giallo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-giallo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-giallo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/goldtraminer/" title="Goldtraminer">Goldtraminer</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/goldtraminer-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="goldtraminer vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/goldtraminer-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/goldtraminer-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/goldtraminer-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/gosen/" title="Gosen">Gosen</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/gosen-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="gosen vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/gosen-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/gosen-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/gosen-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/granaccia/" title="Granaccia">Granaccia</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/alicante/">Alicante</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/alicante-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="alicante vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/alicante-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/alicante-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/alicante-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/grauburgunder/" title="Grauburgunder">Grauburgunder</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/pinot-grigio/">Pinot grigio</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-grigio-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pinot grigio vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-grigio-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-grigio-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-grigio-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-grigia/">Bacca grigia</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/grauer-burgunder/" title="Grauer Burgunder">Grauer Burgunder</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/pinot-grigio/">Pinot grigio</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-grigio-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pinot grigio vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-grigio-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-grigio-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-grigio-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-grigia/">Bacca grigia</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/grauvernatsch/" title="Grauvernatsch">Grauvernatsch</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/schiava-grigia/">Schiava grigia</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-grigia-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="schiava grigia vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-grigia-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-grigia-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-grigia-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/grecanico-dorato/" title="Grecanico dorato">Grecanico dorato</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/grecanico-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="grecanico vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/grecanico-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/grecanico-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/grecanico-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sicilia/">Sicilia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/grechetto/" title="Grechetto">Grechetto</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/grechetto-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="grechetto vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/grechetto-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/grechetto-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/grechetto-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/umbria/">Umbria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/grechetto-gentile/" title="Grechetto gentile">Grechetto gentile</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/pignoletto/">Pignoletto</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pignoletto-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pignoletto vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pignoletto-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pignoletto-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pignoletto-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/grechetto-rosso/" title="Grechetto rosso">Grechetto rosso</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/grechetto-rosso-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="grechetto rosso vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/grechetto-rosso-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/grechetto-rosso-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/grechetto-rosso-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lazio/">Lazio</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/greco/" title="Greco">Greco</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/greco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="greco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/greco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/greco-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/greco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/greco-bianco/" title="Greco Bianco">Greco Bianco</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/greco-bianco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="greco bianco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/greco-bianco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/greco-bianco-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/greco-bianco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/calabria/">Calabria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/greco-di-tufo/" title="Greco di Tufo">Greco di Tufo</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/greco/">Greco</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/greco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="greco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/greco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/greco-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/greco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/greco-nero/" title="Greco Nero">Greco Nero</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/greco-nero-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="greco nero vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/greco-nero-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/greco-nero-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/greco-nero-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/calabria/">Calabria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/grecu-nieddu/" title="Grecu nieddu">Grecu nieddu</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/greco-nero/">Greco Nero</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/greco-nero-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="greco nero vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/greco-nero-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/greco-nero-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/greco-nero-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/calabria/">Calabria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/grenache/" title="Grenache (Garnacha)">Grenache (Garnacha)</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/grenache-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="grenache vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/grenache-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/grenache-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2017/06/grenache-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                    , <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/grenache-blanc/" title="Grenache blanc">Grenache blanc</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/09/grenache-blanc-1-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vitigno grenache blanc" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/09/grenache-blanc-1-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/09/grenache-blanc-1-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/09/grenache-blanc-1-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/grignolino/" title="Grignolino">Grignolino</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/grignolino-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="grignolino vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/grignolino-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/grignolino-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/grignolino-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/grillo/" title="Grillo">Grillo</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/grillo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="grillo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/grillo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/grillo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/grillo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sicilia/">Sicilia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/groppello-di-mocasina/" title="Groppello di Mocasina">Groppello di Mocasina</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/groppello-mocasina-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="groppello di mocasina vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/groppello-mocasina-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/groppello-mocasina-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/groppello-mocasina-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lombardia/">Lombardia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/groppello-di-revo/" title="Groppello di Revò">Groppello di Revò</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/groppello-revo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="groppello di revò vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/groppello-revo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/groppello-revo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/groppello-revo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/groppello-di-santo-stefano/" title="Groppello di Santo Stefano">Groppello di Santo Stefano</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/groppello-s-stefano-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="groppello di santo stefano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/groppello-s-stefano-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/groppello-s-stefano-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/groppello-s-stefano-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lombardia/">Lombardia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/groppello-gentile/" title="Groppello Gentile">Groppello Gentile</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/groppello-gentile-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="groppello gentile vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/groppello-gentile-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/groppello-gentile-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/groppello-gentile-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lombardia/">Lombardia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/groppello-grasparossa/" title="Groppello grasparossa">Groppello grasparossa</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/lambrusco-grasparossa/">Lambrusco Grasparossa</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-grasparossa-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="lambrusco grasparossa vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-grasparossa-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-grasparossa-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-grasparossa-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/groppello-maestri/" title="Groppello Maestri">Groppello Maestri</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/lambrusco-maestri/">Lambrusco Maestri</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-maestri-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="lambrusco maestri vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-maestri-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-maestri-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-maestri-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/groppello-ruberti/" title="Groppello Ruberti">Groppello Ruberti</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/lambrusco-viadanese/">Lambrusco Viadanese</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-viadanese-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="lambrusco viadanese vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-viadanese-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-viadanese-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-viadanese-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/grossvernatsch/" title="Großvernatsch">Großvernatsch</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/schiava-grossa/">Schiava grossa</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-grossa-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="schiava grossa vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-grossa-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-grossa-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-grossa-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/gruaja/" title="Gruaja">Gruaja</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/gruaja-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="gruaja vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/gruaja-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/gruaja-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/gruaja-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/gruner-sylvaner/" title="Grüner Sylvaner">Grüner Sylvaner</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/sylvaner-verde/">Sylvaner verde</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/sylvaner-verde-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="sylvaner verde vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/sylvaner-verde-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sylvaner-verde-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sylvaner-verde-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/gruner-veltliner/" title="Grüner Veltliner">Grüner Veltliner</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/veltliner/">Veltliner</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/veltliner-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="veltliner vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/veltliner-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/veltliner-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/veltliner-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/guardavalle/" title="Guardavalle">Guardavalle</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/guardavalle-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="guardavalle vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/guardavalle-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/guardavalle-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/guardavalle-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/calabria/">Calabria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/guarnaccia/" title="Guarnaccia">Guarnaccia</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/guarnaccia-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="guarnaccia vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/guarnaccia-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/guarnaccia-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/guarnaccia-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/calabria/">Calabria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/imperatrice-dalla-gamba-rossa/" title="Imperatrice dalla Gamba Rossa">Imperatrice dalla Gamba Rossa</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/gamba-rossa/">Gamba rossa</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/gamba-rossa-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="gamba rossa vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/gamba-rossa-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/gamba-rossa-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/gamba-rossa-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/impigno/" title="Impigno">Impigno</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/impigno-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="impigno vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/impigno-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/impigno-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/impigno-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/puglia/">Puglia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/incrocio-bruni-54/" title="Incrocio Bruni 54">Incrocio Bruni 54</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/incrocio-bruni-54-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="incrocio bruni 54 vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/incrocio-bruni-54-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/incrocio-bruni-54-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/incrocio-bruni-54-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/marche/">Marche</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/incrocio-manzoni-1-50/" title="Incrocio Manzoni 1-50">Incrocio Manzoni 1-50</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/manzoni-rosa/">Manzoni rosa</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/manzoni-rosa-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="manzoni rosa vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/manzoni-rosa-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/manzoni-rosa-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/manzoni-rosa-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-rosa/">Bacca rosa</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/incrocio-manzoni-13025/" title="Incrocio Manzoni 13.0.25">Incrocio Manzoni 13.0.25</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/manzoni-moscato/">Manzoni Moscato</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/manzoni-moscato-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="manzoni moscato vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/manzoni-moscato-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/manzoni-moscato-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/manzoni-moscato-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/incrocio-manzoni-214/" title="Incrocio Manzoni 2-14">Incrocio Manzoni 2-14</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/incrocio-manzoni-2-14-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="incrocio manzoni 2-14 vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/incrocio-manzoni-2-14-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/incrocio-manzoni-2-14-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/incrocio-manzoni-2-14-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/incrocio-manzoni-215/" title="Incrocio Manzoni 2-15">Incrocio Manzoni 2-15</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/incrocio-manzoni-2-15-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="incrocio manzoni 2-15 vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/incrocio-manzoni-2-15-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/incrocio-manzoni-2-15-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/incrocio-manzoni-2-15-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/incrocio-manzoni-2-3/" title="Incrocio Manzoni 2.3">Incrocio Manzoni 2.3</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/incrocio-manzoni-2-3-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="incrocio manzoni 2-3 vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/incrocio-manzoni-2-3-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/incrocio-manzoni-2-3-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/incrocio-manzoni-2-3-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/incrocio-manzoni-6013/" title="Incrocio Manzoni 6.0.13">Incrocio Manzoni 6.0.13</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/manzoni-bianco/">Manzoni bianco</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/manzoni-bianco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="manzoni bianco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/manzoni-bianco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/manzoni-bianco-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/manzoni-bianco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/incrocio-terzi-n1/" title="Incrocio Terzi n.1">Incrocio Terzi n.1</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/incrocio-terzi-n1-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="incrocio terzi n.1 vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/incrocio-terzi-n1-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/incrocio-terzi-n1-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/incrocio-terzi-n1-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lombardia/">Lombardia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/insolia/" title="Insolia">Insolia</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/inzolia/">Inzolia</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/inzolia-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="inzolia vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/inzolia-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/inzolia-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/inzolia-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sicilia/">Sicilia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/invernenga/" title="Invernenga">Invernenga</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/invernenga-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="invernenga vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/invernenga-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/invernenga-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/invernenga-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lombardia/">Lombardia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/inzolia/" title="Inzolia">Inzolia</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/inzolia-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="inzolia vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/inzolia-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/inzolia-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/inzolia-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sicilia/">Sicilia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/iuvarella/" title="Iuvarella">Iuvarella</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/malvasia-bianca/">Malvasia bianca</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malvasia bianca vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/janculella/" title="Janculella">Janculella</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/biancolella/">Biancolella</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/biancolella-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="biancolella vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/biancolella-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/biancolella-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/biancolella-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/janculillo/" title="Janculillo">Janculillo</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/biancolella/">Biancolella</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/biancolella-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="biancolella vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/biancolella-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/biancolella-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/biancolella-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/kerner/" title="Kerner">Kerner</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/kerner-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="kerner vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/kerner-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/kerner-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/kerner-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/kleinvernatsch/" title="Kleinvernatsch">Kleinvernatsch</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/schiava-gentile/">Schiava gentile</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-gentile-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="schiava gentile vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-gentile-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-gentile-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-gentile-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/lacrima/" title="Lacrima">Lacrima</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/lacrima-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="lacrima vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/lacrima-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lacrima-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lacrima-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/marche/">Marche</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/lagrein/" title="Lagrein">Lagrein</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/lagrein-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="lagrein vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/lagrein-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lagrein-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lagrein-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/lambrusca-di-alessandria/" title="Lambrusca di Alessandria">Lambrusca di Alessandria</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusca-alessandria-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="lambrusca di alessandria vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusca-alessandria-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusca-alessandria-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusca-alessandria-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/lambrusco/" title="Lambrusco">Lambrusco</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/lambrusco-grasparossa/">Lambrusco Grasparossa</a>
                                                    , <a href="https://www.quattrocalici.it/vitigni/lambrusco-maestri/">Lambrusco Maestri</a>
                                                    , <a href="https://www.quattrocalici.it/vitigni/lambrusco-marani/">Lambrusco Marani</a>
                                                    , <a href="https://www.quattrocalici.it/vitigni/lambrusco-salamino/">Lambrusco Salamino</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-grasparossa-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="lambrusco grasparossa vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-grasparossa-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-grasparossa-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-grasparossa-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/lambrusco-a-foglia-frastagliata/" title="Lambrusco a foglia frastagliata">Lambrusco a foglia frastagliata</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-foglia-frastagliata-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="lambrusco a foglia frastagliata vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-foglia-frastagliata-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-foglia-frastagliata-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-foglia-frastagliata-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/lambrusco-barghi/" title="Lambrusco Barghi">Lambrusco Barghi</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-barghi-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="lambrusco barghi vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-barghi-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-barghi-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-barghi-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/lambrusco-dal-peduncolo-rosso/" title="Lambrusco dal peduncolo rosso">Lambrusco dal peduncolo rosso</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/terrano/">Terrano</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/terrano-150x150.png" class="attachment-80 size-80 wp-post-image" alt="terrano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/terrano-150x150.png 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/terrano-234x235.png 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/terrano-160x160.png 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/lambrusco-di-sorbara/" title="Lambrusco di Sorbara">Lambrusco di Sorbara</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-sorbara-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="lambrusco di sorbara vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-sorbara-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-sorbara-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-sorbara-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/lambrusco-grasparossa/" title="Lambrusco Grasparossa">Lambrusco Grasparossa</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-grasparossa-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="lambrusco grasparossa vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-grasparossa-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-grasparossa-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-grasparossa-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/lambrusco-maestri/" title="Lambrusco Maestri">Lambrusco Maestri</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-maestri-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="lambrusco maestri vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-maestri-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-maestri-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-maestri-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/lambrusco-marani/" title="Lambrusco Marani">Lambrusco Marani</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-marani-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="lambrusco marani vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-marani-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-marani-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-marani-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/lambrusco-montericco/" title="Lambrusco Montericco">Lambrusco Montericco</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-montericco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="lambrusco montericco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-montericco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-montericco-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-montericco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/lambrusco-oliva/" title="Lambrusco Oliva">Lambrusco Oliva</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-oliva-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="lambrusco oliva vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-oliva-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-oliva-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-oliva-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/lambrusco-salamino/" title="Lambrusco Salamino">Lambrusco Salamino</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-salamino-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="lambrusco salamino vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-salamino-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-salamino-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-salamino-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/lambrusco-viadanese/" title="Lambrusco Viadanese">Lambrusco Viadanese</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-viadanese-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="lambrusco viadanese vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-viadanese-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-viadanese-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lambrusco-viadanese-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lombardia/">Lombardia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/lancellotta/" title="Lancellotta">Lancellotta</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/ancellotta/">Ancellotta</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/ancellotta-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="ancellotta vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/ancellotta-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ancellotta-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ancellotta-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/lecinaro/" title="Lecinaro">Lecinaro</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/lecinaro-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="lecinaro vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/lecinaro-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lecinaro-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lecinaro-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lazio/">Lazio</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/lumassina/" title="Lumassina">Lumassina</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/lumassina-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="lumassina vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/lumassina-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lumassina-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lumassina-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/liguria/">Liguria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/macabeo-viura/" title="Macabeo (Viura)">Macabeo (Viura)</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/09/macabeo-1-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vitigno macabeo" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/09/macabeo-1-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/09/macabeo-1-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/09/macabeo-1-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/maceratino/" title="Maceratino">Maceratino</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/maceratino-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="maceratino vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/maceratino-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/maceratino-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/maceratino-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/marche/">Marche</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/magliocco/" title="Magliocco">Magliocco</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/gaglioppo/">Gaglioppo</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/gaglioppo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="gaglioppo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/gaglioppo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/gaglioppo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/gaglioppo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/calabria/">Calabria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/magliocco-canino/" title="Magliocco canino">Magliocco canino</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/magliocco-canino-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="magliocco canino vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/magliocco-canino-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/magliocco-canino-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/magliocco-canino-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/calabria/">Calabria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/maglioccone/" title="Maglioccone">Maglioccone</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/greco-nero/">Greco Nero</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/greco-nero-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="greco nero vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/greco-nero-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/greco-nero-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/greco-nero-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/calabria/">Calabria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/maglioppo/" title="Maglioppo">Maglioppo</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/gaglioppo/">Gaglioppo</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/gaglioppo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="gaglioppo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/gaglioppo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/gaglioppo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/gaglioppo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/calabria/">Calabria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/malbech/" title="Malbech">Malbech</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malbech-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malbech vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malbech-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malbech-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malbech-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/malbo-gentile/" title="Malbo gentile">Malbo gentile</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malbo-gentile-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malbo gentile vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malbo-gentile-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malbo-gentile-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malbo-gentile-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/malvasia/" title="Malvasia">Malvasia</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/malvasia-bianca/">Malvasia bianca</a>
                                                    , <a href="https://www.quattrocalici.it/vitigni/malvasia-bianca-di-candia/">Malvasia bianca di Candia</a>
                                                    , <a href="https://www.quattrocalici.it/vitigni/malvasia-bianca-lunga/">Malvasia bianca lunga</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malvasia bianca vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/italia/">Italia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/malvasia-bianca/" title="Malvasia bianca">Malvasia bianca</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malvasia bianca vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/malvasia-bianca-di-basilicata/" title="Malvasia bianca di Basilicata">Malvasia bianca di Basilicata</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-basilicata-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malvasia bianca di basilicata vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-basilicata-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-basilicata-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-basilicata-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/basilicata/">Basilicata</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/malvasia-bianca-di-candia/" title="Malvasia bianca di Candia">Malvasia bianca di Candia</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-candia-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malvasia bianca di candia vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-candia-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-candia-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-candia-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lombardia/">Lombardia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/malvasia-bianca-lunga/" title="Malvasia bianca lunga">Malvasia bianca lunga</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-lunga-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malvasia bianca lunga vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-lunga-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-lunga-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-lunga-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/malvasia-del-chianti/" title="Malvasia del Chianti">Malvasia del Chianti</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/malvasia-bianca-lunga/">Malvasia bianca lunga</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-lunga-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malvasia bianca lunga vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-lunga-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-lunga-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-lunga-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/malvasia-del-lazio/" title="Malvasia del Lazio">Malvasia del Lazio</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-lazio-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malvasia del lazio vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-lazio-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-lazio-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-lazio-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lazio/">Lazio</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/malvasia-di-candia-aromatica/" title="Malvasia di Candia aromatica">Malvasia di Candia aromatica</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-candia-aromatica-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malvasia di candia aromatica vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-candia-aromatica-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-candia-aromatica-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-candia-aromatica-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/malvasia-di-casorzo/" title="Malvasia di Casorzo">Malvasia di Casorzo</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-casorzo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malvasia di casorzo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-casorzo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-casorzo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-casorzo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/malvasia-di-lipari/" title="Malvasia di Lipari">Malvasia di Lipari</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-lipari-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malvasia di lipari vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-lipari-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-lipari-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-lipari-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sicilia/">Sicilia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/malvasia-di-sardegna/" title="Malvasia di Sardegna">Malvasia di Sardegna</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-sardegna-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malvasia di sardegna vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-sardegna-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-sardegna-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-sardegna-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/malvasia-di-schierano/" title="Malvasia di Schierano">Malvasia di Schierano</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-schierano-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malvasia di schierano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-schierano-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-schierano-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-schierano-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/malvasia-istriana/" title="Malvasia Istriana">Malvasia Istriana</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-istriana-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malvasia istriana vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-istriana-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-istriana-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-istriana-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/malvasia-nera/" title="Malvasia nera">Malvasia nera</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malvasia nera vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-160x160.jpg 160w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-235x235.jpg 235w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/malvasia-nera-di-basilicata/" title="Malvasia nera di Basilicata">Malvasia nera di Basilicata</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-basilicata-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malvasia nera di basilicata vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-basilicata-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-basilicata-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-basilicata-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/basilicata/">Basilicata</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/malvasia-nera-di-brindisi/" title="Malvasia nera di Brindisi">Malvasia nera di Brindisi</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-brindisi-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malvasia nera di brindisi vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-brindisi-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-brindisi-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-brindisi-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/puglia/">Puglia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/malvasia-nera-di-lecce/" title="Malvasia nera di Lecce">Malvasia nera di Lecce</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-lecce-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malvasia nera di lecce vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-lecce-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-lecce-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-lecce-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/puglia/">Puglia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/malvasia-nera-lunga/" title="Malvasia nera lunga">Malvasia nera lunga</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-lunga-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malvasia nera lunga vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-lunga-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-lunga-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-lunga-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/malvasia-puntinata/" title="Malvasia puntinata">Malvasia puntinata</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/malvasia-del-lazio/">Malvasia del Lazio</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-lazio-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malvasia del lazio vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-lazio-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-lazio-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-lazio-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lazio/">Lazio</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/malvasia-rosa/" title="Malvasia rosa">Malvasia rosa</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-rosa-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malvasia rosa vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-rosa-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-rosa-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-rosa-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-rosa/">Bacca rosa</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/malvasier/" title="Malvasier">Malvasier</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/malvasia-nera/">Malvasia nera</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malvasia nera vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-160x160.jpg 160w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-235x235.jpg 235w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/malvoise/" title="Malvoise">Malvoise</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/malvasia-bianca/">Malvasia bianca</a>
                                                    , <a href="https://www.quattrocalici.it/vitigni/malvasia-bianca-di-candia/">Malvasia bianca di Candia</a>
                                                    , <a href="https://www.quattrocalici.it/vitigni/malvasia-bianca-lunga/">Malvasia bianca lunga</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malvasia bianca vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/valle-d-aosta/">Valle d &#8217;Aosta</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/malvoisier/" title="Malvoisier">Malvoisier</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/malvasia-nera/">Malvasia nera</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malvasia nera vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-160x160.jpg 160w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-235x235.jpg 235w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/mammolo/" title="Mammolo">Mammolo</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/mammolo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="mammolo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/mammolo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/mammolo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/mammolo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/mantonico/" title="Mantonico">Mantonico</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/montonico/">Montonico bianco</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/montonico-bianco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="montonico bianco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/montonico-bianco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/montonico-bianco-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/montonico-bianco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/abruzzo/">Abruzzo</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/manzoni-bianco/" title="Manzoni bianco">Manzoni bianco</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/manzoni-bianco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="manzoni bianco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/manzoni-bianco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/manzoni-bianco-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/manzoni-bianco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/manzoni-moscato/" title="Manzoni Moscato">Manzoni Moscato</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/manzoni-moscato-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="manzoni moscato vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/manzoni-moscato-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/manzoni-moscato-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/manzoni-moscato-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/manzoni-rosa/" title="Manzoni rosa">Manzoni rosa</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/manzoni-rosa-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="manzoni rosa vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/manzoni-rosa-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/manzoni-rosa-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/manzoni-rosa-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-rosa/">Bacca rosa</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/manzoni-rosso/" title="Manzoni rosso">Manzoni rosso</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/incrocio-manzoni-215/">Incrocio Manzoni 2-15</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/incrocio-manzoni-2-15-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="incrocio manzoni 2-15 vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/incrocio-manzoni-2-15-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/incrocio-manzoni-2-15-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/incrocio-manzoni-2-15-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/marcigliana/" title="Marcigliana">Marcigliana</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/marsigliana-nera/">Marsigliana nera</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/marsigliana-nera-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="marsigliana nera vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/marsigliana-nera-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/marsigliana-nera-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/marsigliana-nera-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/calabria/">Calabria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/marsanne/" title="Marsanne">Marsanne</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/marsanne-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="marsanne vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/marsanne-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/marsanne-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/marsanne-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/marsigliana-nera/" title="Marsigliana nera">Marsigliana nera</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/marsigliana-nera-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="marsigliana nera vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/marsigliana-nera-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/marsigliana-nera-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/marsigliana-nera-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/calabria/">Calabria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/marzemina/" title="Marzemina">Marzemina</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/marzemina-bianca/">Marzemina bianca</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/marzemina-bianca-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="marzemina bianca vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/marzemina-bianca-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/marzemina-bianca-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/marzemina-bianca-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lombardia/">Lombardia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/marzemina-bianca/" title="Marzemina bianca">Marzemina bianca</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/marzemina-bianca-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="marzemina bianca vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/marzemina-bianca-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/marzemina-bianca-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/marzemina-bianca-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/marzemino/" title="Marzemino">Marzemino</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2019/10/marzemino-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="marzemino vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2019/10/marzemino-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2019/10/marzemino-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2019/10/marzemino-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/massaretta/" title="Massaretta">Massaretta</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/barsaglina/">Barsaglina</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/barsaglina-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="barsaglina vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/barsaglina-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/barsaglina-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/barsaglina-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/mataosso/" title="Mataosso">Mataosso</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/lumassina/">Lumassina</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/lumassina-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="lumassina vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/lumassina-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lumassina-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lumassina-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/liguria/">Liguria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/mataossu/" title="Mataossu">Mataossu</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/lumassina/">Lumassina</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/lumassina-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="lumassina vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/lumassina-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lumassina-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/lumassina-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/liguria/">Liguria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/maturano/" title="Maturano">Maturano</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/maturano-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="maturano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/maturano-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/maturano-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/maturano-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lazio/">Lazio</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/mayolet/" title="Mayolet">Mayolet</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/mayolet-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="mayolet vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/mayolet-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/mayolet-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/mayolet-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/valle-d-aosta/">Valle d &#8217;Aosta</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/melara/" title="Melara">Melara</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/melara-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="melara vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/melara-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/melara-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/melara-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/melon-de-bourgogne/" title="Melon de Bourgogne">Melon de Bourgogne</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/09/melon-de-bourgogne-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="melon de bourgogne vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/09/melon-de-bourgogne-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/09/melon-de-bourgogne-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/09/melon-de-bourgogne-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/mencia/" title="Mencía">Mencía</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/08/mencia-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vitigno mencia" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/08/mencia-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/08/mencia-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/08/mencia-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/merlot/" title="Merlot">Merlot</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/merlot-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="merlot vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/merlot-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/merlot-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2017/06/merlot-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                    , <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/meunier/" title="Meunier">Meunier</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/pinot-meunier/">Pinot Meunier</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-meunier-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pinot meunier vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-meunier-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-meunier-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-meunier-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/minnella-bianca/" title="Minnella bianca">Minnella bianca</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/minnella-bianca-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="minnella bianca vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/minnella-bianca-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/minnella-bianca-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/minnella-bianca-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sicilia/">Sicilia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/minutolo/" title="Minutolo">Minutolo</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/minutolo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="minutolo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/minutolo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/minutolo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/minutolo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/puglia/">Puglia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/mittervernatsch/" title="Mittervernatsch">Mittervernatsch</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/schiava-gentile/">Schiava gentile</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-gentile-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="schiava gentile vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-gentile-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-gentile-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-gentile-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/molinara/" title="Molinara">Molinara</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/molinara-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="molinara vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/molinara-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/molinara-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/molinara-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/monastrell-mourvedre/" title="Monastrell (Mourvèdre)">Monastrell (Mourvèdre)</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/08/monastrell-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="monastrell mourvedre vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/08/monastrell-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/08/monastrell-160x160.jpg 160w, https://www.quattrocalici.it/wp-content/uploads/2020/08/monastrell-235x235.jpg 235w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/mondeuse/" title="Mondeuse">Mondeuse</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/mondeuse-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="mondeuse vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/mondeuse-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/mondeuse-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/mondeuse-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sicilia/">Sicilia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/monica/" title="Monica">Monica</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/monica-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="monica vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/monica-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/monica-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/monica-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/montepulciano/" title="Montepulciano">Montepulciano</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/montepulciano-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="montepulciano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/montepulciano-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/montepulciano-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/montepulciano-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/abruzzo/">Abruzzo</a>
                                                    , <a href="https://www.quattrocalici.it/regione/marche/">Marche</a>
                                                    , <a href="https://www.quattrocalici.it/regione/molise/">Molise</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/montonico/" title="Montonico bianco">Montonico bianco</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/montonico-bianco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="montonico bianco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/montonico-bianco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/montonico-bianco-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/montonico-bianco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/abruzzo/">Abruzzo</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/montu/" title="Montù">Montù</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/montu-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="montu vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/montu-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/montu-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/montu-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/montuni/" title="Montuni">Montuni</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/montu/">Montù</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/montu-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="montu vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/montu-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/montu-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/montu-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/morellino/" title="Morellino">Morellino</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/sangiovese/">Sangiovese</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/sangiovese-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="sangiovese vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/sangiovese-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sangiovese-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sangiovese-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/morettone/" title="Morettone">Morettone</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/ciliegiolo/">Ciliegiolo</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/ciliegiolo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="ciliegiolo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/ciliegiolo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ciliegiolo-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ciliegiolo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/moscatello/" title="Moscatello">Moscatello</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/moscato-bianco/">Moscato bianco</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="moscato bianco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/moscatello-selvatico/" title="Moscatello selvatico">Moscatello selvatico</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscatello-selvatico-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="moscatello selvatico vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscatello-selvatico-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscatello-selvatico-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscatello-selvatico-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/puglia/">Puglia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/moscatellone/" title="Moscatellone">Moscatellone</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/moscato-bianco/">Moscato bianco</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="moscato bianco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/moscato/" title="Moscato">Moscato</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/moscato-bianco/">Moscato bianco</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="moscato bianco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/moscato-bianco/" title="Moscato bianco">Moscato bianco</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="moscato bianco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/moscato-di-alessandria/" title="Moscato d&#8217;Alessandria">Moscato d &#8217;Alessandria</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/08/moscato-alessandria-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="moscato d&#039;alessandria" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/08/moscato-alessandria-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/08/moscato-alessandria-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/08/moscato-alessandria-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/moscato-delle-rose/" title="Moscato delle rose">Moscato delle rose</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/moscato-rosa/">Moscato rosa</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-rosa-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="moscato rosa vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-rosa-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-rosa-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-rosa-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-rosa/">Bacca rosa</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/moscato-di-scanzo/" title="Moscato di Scanzo">Moscato di Scanzo</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-scanzo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="moscato di scanzo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-scanzo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-scanzo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-scanzo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lombardia/">Lombardia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/moscato-di-terracina/" title="Moscato di Terracina">Moscato di Terracina</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-terracina-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="moscato di terracina vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-terracina-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-terracina-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-terracina-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lazio/">Lazio</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/moscato-giallo/" title="Moscato giallo">Moscato giallo</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-giallo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="moscato giallo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-giallo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-giallo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-giallo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/moscato-reale/" title="Moscato reale">Moscato reale</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/moscato-bianco/">Moscato bianco</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="moscato bianco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/moscato-rosa/" title="Moscato rosa">Moscato rosa</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-rosa-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="moscato rosa vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-rosa-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-rosa-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-rosa-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/moschofilero/" title="Moschofilero">Moschofilero</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/08/moschofilero-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="moschofilero vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/08/moschofilero-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/08/moschofilero-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/08/moschofilero-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/mostosa/" title="Mostosa">Mostosa</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/mostosa-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="mostosa vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/mostosa-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/mostosa-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/mostosa-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/muller-thurgau/" title="Müller-Thurgau">Müller-Thurgau</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/muller-thurgau-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="müller-thurgau vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/muller-thurgau-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/muller-thurgau-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/muller-thurgau-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/muscat/" title="Muscat">Muscat</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/moscato-bianco/">Moscato bianco</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="moscato bianco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/valle-d-aosta/">Valle d &#8217;Aosta</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/muscat-blanc-a-petit-grain/" title="Muscat blanc a petit grain">Muscat blanc a petit grain</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/moscato-bianco/">Moscato bianco</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="moscato bianco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/valle-d-aosta/">Valle d &#8217;Aosta</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/muscat-de-chambave/" title="Muscat de Chambave">Muscat de Chambave</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/moscato-bianco/">Moscato bianco</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="moscato bianco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/valle-d-aosta/">Valle d &#8217;Aosta</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/muskateller/" title="Muskateller">Muskateller</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/moscato-bianco/">Moscato bianco</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="moscato bianco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-bianco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/nascetta/" title="Nascetta">Nascetta</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/nascetta-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="nascetta vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/nascetta-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nascetta-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nascetta-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/nasco/" title="Nasco">Nasco</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/nasco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="nasco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/nasco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nasco-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nasco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/nebbiolo/" title="Nebbiolo">Nebbiolo</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/nebbiolo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="nebbiolo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/nebbiolo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nebbiolo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nebbiolo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                    , <a href="https://www.quattrocalici.it/regione/lombardia/">Lombardia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/nebbiolo-di-dronero/" title="Nebbiolo di Dronero">Nebbiolo di Dronero</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/chatus/">Chatus</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/chatus-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="chatus vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/chatus-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/chatus-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/chatus-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/negrara/" title="Negrara">Negrara</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/negrara-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="negrara vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/negrara-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/negrara-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/negrara-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/negretto/" title="Negretto">Negretto</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/negretto-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="negretto vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/negretto-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/negretto-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/negretto-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/negro-amaro/" title="Negro Amaro">Negro Amaro</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/negro-amaro-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="negro amaro vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/negro-amaro-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/negro-amaro-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/negro-amaro-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/puglia/">Puglia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/negroamaro/" title="Negroamaro">Negroamaro</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/negro-amaro/">Negro Amaro</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/negro-amaro-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="negro amaro vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/negro-amaro-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/negro-amaro-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/negro-amaro-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/puglia/">Puglia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/negroamaro-precoce/" title="Negroamaro precoce">Negroamaro precoce</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/negroamaro-precoce-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="negroamaro precoce vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/negroamaro-precoce-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/negroamaro-precoce-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/negroamaro-precoce-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/puglia/">Puglia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/nerello-cappuccio/" title="Nerello Cappuccio">Nerello Cappuccio</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/nerello-cappuccio-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="nerello cappuccio vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/nerello-cappuccio-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nerello-cappuccio-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nerello-cappuccio-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sicilia/">Sicilia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/nerello-mantellato/" title="Nerello mantellato">Nerello mantellato</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/nerello-cappuccio/">Nerello Cappuccio</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/nerello-cappuccio-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="nerello cappuccio vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/nerello-cappuccio-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nerello-cappuccio-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nerello-cappuccio-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sicilia/">Sicilia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/nerello-mascalese/" title="Nerello Mascalese">Nerello Mascalese</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/nerello-mascalese-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="nerello mascalese vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/nerello-mascalese-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nerello-mascalese-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nerello-mascalese-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sicilia/">Sicilia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/neretta-cuneese/" title="Neretta Cuneese">Neretta Cuneese</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/neretta-cuneese-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="neretta cuneese vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/neretta-cuneese-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/neretta-cuneese-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/neretta-cuneese-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/neretto-di-bairo/" title="Neretto di Bairo">Neretto di Bairo</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/neretto-bairo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="neretto di bairo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/neretto-bairo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/neretto-bairo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/neretto-bairo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/nero-amaro/" title="Nero Amaro">Nero Amaro</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/negro-amaro/">Negro Amaro</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/negro-amaro-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="negro amaro vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/negro-amaro-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/negro-amaro-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/negro-amaro-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/puglia/">Puglia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/nero-buono/" title="Nero buono">Nero buono</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/nero-buono-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="nero buono vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/nero-buono-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nero-buono-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nero-buono-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lazio/">Lazio</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/nero-d-avola/" title="Nero d&#8217;Avola">Nero d &#8217;Avola</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/calabrese-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="calabrese-nero d&#039;avola vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/calabrese-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/calabrese-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/calabrese-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sicilia/">Sicilia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/nero-di-troia/" title="Nero di Troia">Nero di Troia</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/uva-di-troia/">Uva di Troia</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/uva-di-troia-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="uva di troia vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/uva-di-troia-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/uva-di-troia-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/uva-di-troia-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/puglia/">Puglia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/neyret/" title="Neyret">Neyret</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/neyret-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="neyret vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/neyret-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/neyret-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/neyret-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/valle-d-aosta/">Valle d &#8217;Aosta</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/nieddera/" title="Nieddera">Nieddera</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/nieddera-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="nieddera vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/nieddera-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nieddera-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nieddera-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/nocera/" title="Nocera">Nocera</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/nocera-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="nocera vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/nocera-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nocera-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nocera-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/calabria/">Calabria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/nosiola/" title="Nosiola">Nosiola</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/nosiola-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="nosiola vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/nosiola-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nosiola-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nosiola-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/notardomenico/" title="Notardomenico">Notardomenico</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/notardomenico-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="notardomenico vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/notardomenico-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/notardomenico-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/notardomenico-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/puglia/">Puglia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/nuragus/" title="Nuragus">Nuragus</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/nuragus-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="nuragus vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/nuragus-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nuragus-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nuragus-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/olivella-nera/" title="Olivella nera">Olivella nera</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/olivella-nera-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="olivella nera vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/olivella-nera-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/olivella-nera-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/olivella-nera-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lazio/">Lazio</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/ormeasco/" title="Ormeasco">Ormeasco</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/dolcetto/">Dolcetto</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/dolcetto-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="dolcetto vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/dolcetto-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/dolcetto-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/dolcetto-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/liguria/">Liguria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/oro/" title="Oro">Oro</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/garganega/">Garganega</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/garganega-1-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="garganega vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/garganega-1-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/garganega-1-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/garganega-1-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/ortrugo/" title="Ortrugo">Ortrugo</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/ortrugo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="ortrugo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/ortrugo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ortrugo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ortrugo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/oseleta/" title="Oseleta">Oseleta</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/oseleta-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="oseleta vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/oseleta-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/oseleta-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/oseleta-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/ottavianello/" title="Ottavianello">Ottavianello</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/ottavianello-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="ottavianello vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/ottavianello-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ottavianello-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ottavianello-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/puglia/">Puglia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/ottenese/" title="Ottenese">Ottenese</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/bombino-bianco/">Bombino bianco</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/bombino-bianco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="bombino bianco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/bombino-bianco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bombino-bianco-233x235.jpg 233w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bombino-bianco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pallagrello-bianco/" title="Pallagrello bianco">Pallagrello bianco</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pallagrello-bianco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pallagrello bianco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pallagrello-bianco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pallagrello-bianco-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pallagrello-bianco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pallagrello-nero/" title="Pallagrello nero">Pallagrello nero</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pallagrello-nero-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pallagrello nero vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pallagrello-nero-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pallagrello-nero-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pallagrello-nero-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/palombina/" title="Palombina">Palombina</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/piedirosso/">Piedirosso</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/piedirosso-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="piedirosso vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/piedirosso-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/piedirosso-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/piedirosso-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pampanaro/" title="Pampanaro">Pampanaro</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pampanaro-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pampanaro vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pampanaro-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pampanaro-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pampanaro-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lazio/">Lazio</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pampanino/" title="Pampanino">Pampanino</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/verdeca/">Verdeca</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/verdeca-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="verdeca vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/verdeca-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/verdeca-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/verdeca-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/puglia/">Puglia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pampanuto/" title="Pampanuto">Pampanuto</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/verdeca/">Verdeca</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/verdeca-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="verdeca vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/verdeca-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/verdeca-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/verdeca-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/puglia/">Puglia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pascale/" title="Pascale">Pascale</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pascale-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pascale vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pascale-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pascale-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pascale-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/passerina/" title="Passerina">Passerina</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/passerina-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="passerina vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/passerina-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/passerina-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/passerina-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/abruzzo/">Abruzzo</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pavana/" title="Pavana">Pavana</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pavana-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pavana vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pavana-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pavana-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pavana-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pecorello/" title="Pecorello">Pecorello</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pecorello-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pecorello vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pecorello-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pecorello-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pecorello-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/calabria/">Calabria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pecorello-di-rogliano/" title="Pecorello di Rogliano">Pecorello di Rogliano</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/pecorello/">Pecorello</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pecorello-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pecorello vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pecorello-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pecorello-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pecorello-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/calabria/">Calabria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pecorino/" title="Pecorino">Pecorino</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pecorino-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pecorino vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pecorino-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pecorino-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pecorino-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/marche/">Marche</a>
                                                    , <a href="https://www.quattrocalici.it/regione/abruzzo/">Abruzzo</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pedevenda/" title="Pedevenda">Pedevenda</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pedevenda-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pedevenda vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pedevenda-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pedevenda-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pedevenda-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pelaverga/" title="Pelaverga">Pelaverga</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pelaverga-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pelaverga vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pelaverga-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pelaverga-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pelaverga-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pelaverga-piccolo/" title="Pelaverga piccolo">Pelaverga piccolo</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pelaverga-piccolo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vitigno pelaverga piccolo" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pelaverga-piccolo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pelaverga-piccolo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pelaverga-piccolo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pepella/" title="Pepella">Pepella</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pepella-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pepella vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pepella-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pepella-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pepella-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/per-e-palummo/" title="Per&#8217;e palummo">Per &#8217;e palummo</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/piedirosso/">Piedirosso</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/piedirosso-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="piedirosso vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/piedirosso-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/piedirosso-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/piedirosso-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/perera/" title="Perera">Perera</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/perera-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vitigno perera" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/perera-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/perera-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/perera-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/perla-dei-vivi/" title="Perla dei vivi">Perla dei vivi</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/perla-dei-vivi-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="perla dei vivi vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/perla-dei-vivi-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/perla-dei-vivi-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/perla-dei-vivi-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/perricone/" title="Perricone">Perricone</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/perricone-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="perricone vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/perricone-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/perricone-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/perricone-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sicilia/">Sicilia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/petit-manseng/" title="Petit Manseng">Petit Manseng</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/petit-manseng-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="petit manseng vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/petit-manseng-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/petit-manseng-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/petit-manseng-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/petit-rouge/" title="Petit Rouge">Petit Rouge</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/petit-rouge-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="petit rouge vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/petit-rouge-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/petit-rouge-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/petit-rouge-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/valle-d-aosta/">Valle d &#8217;Aosta</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/petit-verdot/" title="Petit Verdot">Petit Verdot</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/petit-verdot-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="petit verdot vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/petit-verdot-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/petit-verdot-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/petit-verdot-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/petite-arvine/" title="Petite Arvine">Petite Arvine</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/petite-arvine-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="petite arvine vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/petite-arvine-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/petite-arvine-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/petite-arvine-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/valle-d-aosta/">Valle d &#8217;Aosta</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/petite-syrah/" title="Petite Syrah">Petite Syrah</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/09/petite-syrah-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="petite syrah vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/09/petite-syrah-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/09/petite-syrah-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/09/petite-syrah-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/picolit/" title="Picolit">Picolit</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/picolit-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="picolit vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/picolit-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/picolit-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/picolit-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/picpoul/" title="Picpoul">Picpoul</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/09/picpoul-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="picpoul vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/09/picpoul-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/09/picpoul-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/09/picpoul-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/piede-di-colombo/" title="Piede di colombo">Piede di colombo</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/piedirosso/">Piedirosso</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/piedirosso-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="piedirosso vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/piedirosso-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/piedirosso-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/piedirosso-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/piede-di-palumbo/" title="Piede di palumbo">Piede di palumbo</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/piedirosso/">Piedirosso</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/piedirosso-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="piedirosso vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/piedirosso-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/piedirosso-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/piedirosso-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/piedirosso/" title="Piedirosso">Piedirosso</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/piedirosso-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="piedirosso vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/piedirosso-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/piedirosso-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/piedirosso-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pigato/" title="Pigato">Pigato</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pigato-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pigato vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pigato-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pigato-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pigato-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/liguria/">Liguria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pignola/" title="Pignola">Pignola</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pignola-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pignola vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pignola-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pignola-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pignola-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lombardia/">Lombardia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pignoletto/" title="Pignoletto">Pignoletto</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pignoletto-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pignoletto vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pignoletto-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pignoletto-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pignoletto-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pignolo/" title="Pignolo">Pignolo</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pignolo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pignolo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pignolo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pignolo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pignolo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pinella/" title="Pinella">Pinella</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pinella-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pinella vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pinella-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pinella-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pinella-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pinella-bianca/" title="Pinella bianca">Pinella bianca</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/pinella/">Pinella</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pinella-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pinella vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pinella-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pinella-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pinella-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pinello/" title="Pinello">Pinello</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/pinella/">Pinella</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pinella-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pinella vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pinella-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pinella-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pinella-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pinot/" title="Pinot">Pinot</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/pinot-bianco/">Pinot bianco</a>
                                                    , <a href="https://www.quattrocalici.it/vitigni/pinot-grigio/">Pinot grigio</a>
                                                    , <a href="https://www.quattrocalici.it/vitigni/pinot-nero/">Pinot nero</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/Pinot-nero-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="Pinot nero vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/Pinot-nero-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/Pinot-nero-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/Pinot-nero-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/italia/">Italia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pinot-bianco/" title="Pinot bianco">Pinot bianco</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-bianco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pinot bianco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-bianco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-bianco-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-bianco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pinot-grigio/" title="Pinot grigio">Pinot grigio</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-grigio-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pinot grigio vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-grigio-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-grigio-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-grigio-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-grigia/">Bacca grigia</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pinot-gris/" title="Pinot gris">Pinot gris</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/pinot-grigio/">Pinot grigio</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-grigio-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pinot grigio vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-grigio-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-grigio-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-grigio-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-grigia/">Bacca grigia</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/valle-d-aosta/">Valle d &#8217;Aosta</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pinot-meunier/" title="Pinot Meunier">Pinot Meunier</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-meunier-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pinot meunier vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-meunier-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-meunier-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-meunier-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pinot-nero/" title="Pinot nero">Pinot nero</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/Pinot-nero-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="Pinot nero vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/Pinot-nero-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/Pinot-nero-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/Pinot-nero-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                    , <a href="https://www.quattrocalici.it/regione/lombardia/">Lombardia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pinot-noir/" title="Pinot noir">Pinot noir</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/pinot-nero/">Pinot nero</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/Pinot-nero-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="Pinot nero vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/Pinot-nero-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/Pinot-nero-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/Pinot-nero-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/valle-d-aosta/">Valle d &#8217;Aosta</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pinotage/" title="Pinotage">Pinotage</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/09/pinotage-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pinotage vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/09/pinotage-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/09/pinotage-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/09/pinotage-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pollera-nera/" title="Pollera nera">Pollera nera</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pollera-nera-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pollera nera vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pollera-nera-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pollera-nera-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pollera-nera-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/liguria/">Liguria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/portoghese/" title="Portoghese">Portoghese</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/portoghese-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="portoghese vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/portoghese-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/portoghese-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/portoghese-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/portugieser/" title="Portugieser">Portugieser</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/portoghese/">Portoghese</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/portoghese-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="portoghese vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/portoghese-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/portoghese-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/portoghese-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/premetta/" title="Prëmetta">Prëmetta</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/prie-rouge/">Prié rouge</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/premetta-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="premetta vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/premetta-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/premetta-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/premetta-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-rosa/">Bacca rosa</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/valle-d-aosta/">Valle d &#8217;Aosta</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/prie-blanc/" title="Prié blanc">Prié blanc</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/prie-blanc-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="prie blanc vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/prie-blanc-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/prie-blanc-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/prie-blanc-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/valle-d-aosta/">Valle d &#8217;Aosta</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/prie-rouge/" title="Prié rouge">Prié rouge</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/prie-rouge-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="prie rouge vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/prie-rouge-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/prie-rouge-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/prie-rouge-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-rosa/">Bacca rosa</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/valle-d-aosta/">Valle d &#8217;Aosta</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/primitivo/" title="Primitivo">Primitivo</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/primitivo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="primitivo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/primitivo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/primitivo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/primitivo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/puglia/">Puglia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/procanico/" title="Procanico">Procanico</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/trebbiano-toscano/">Trebbiano Toscano</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-toscano-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="trebbiano toscano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-toscano-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-toscano-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-toscano-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/prosecco/" title="Prosecco">Prosecco</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/glera/">Glera</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/glera-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="glera vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/glera-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/glera-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/glera-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/prugnolo-gentile/" title="Prugnolo Gentile">Prugnolo Gentile</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/sangiovese/">Sangiovese</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/sangiovese-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="sangiovese vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/sangiovese-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sangiovese-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sangiovese-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/prunent/" title="Prunent">Prunent</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/nebbiolo/">Nebbiolo</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/nebbiolo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="nebbiolo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/nebbiolo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nebbiolo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nebbiolo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/valle-d-aosta/">Valle d &#8217;Aosta</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/prunesta/" title="Prunesta">Prunesta</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/prunesta-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="prunesta vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/prunesta-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/prunesta-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/prunesta-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/calabria/">Calabria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/pugnitello/" title="Pugnitello">Pugnitello</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pugnitello-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pugnitello vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pugnitello-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pugnitello-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pugnitello-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/quagliano/" title="Quagliano">Quagliano</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/quagliano-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="quagliano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/quagliano-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/quagliano-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/quagliano-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/raboso-piave/" title="Raboso Piave">Raboso Piave</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/raboso-piave-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="raboso piave vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/raboso-piave-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/raboso-piave-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/raboso-piave-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/raboso-veronese/" title="Raboso Veronese">Raboso Veronese</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/raboso-veronese-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="raboso veronese vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/raboso-veronese-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/raboso-veronese-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/raboso-veronese-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/rebo/" title="Rebo">Rebo</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/rebo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="rebo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/rebo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/rebo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/rebo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/rebula/" title="Rebula">Rebula</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/ribolla-gialla/">Ribolla gialla</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/ribolla-gialla-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="ribolla gialla vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/ribolla-gialla-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ribolla-gialla-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ribolla-gialla-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/recantina/" title="Recantina">Recantina</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/recantina-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="recantina vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/recantina-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/recantina-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/recantina-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/refosco/" title="Refosco">Refosco</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/refosco-dal-peduncolo-rosso/">Refosco dal peduncolo rosso</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/refosco-peduncolo-rosso-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="refosco dal peduncolo rosso vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/refosco-peduncolo-rosso-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/refosco-peduncolo-rosso-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/refosco-peduncolo-rosso-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/refosco-dal-peduncolo-rosso/" title="Refosco dal peduncolo rosso">Refosco dal peduncolo rosso</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/refosco-peduncolo-rosso-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="refosco dal peduncolo rosso vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/refosco-peduncolo-rosso-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/refosco-peduncolo-rosso-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/refosco-peduncolo-rosso-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/refosco-grosso/" title="Refosco grosso">Refosco grosso</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/refosco-nostrano/">Refosco nostrano</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/refosco-nostrano-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="refosco nostrano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/refosco-nostrano-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/refosco-nostrano-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/refosco-nostrano-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/refosco-nostrano/" title="Refosco nostrano">Refosco nostrano</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/refosco-nostrano-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="refosco nostrano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/refosco-nostrano-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/refosco-nostrano-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/refosco-nostrano-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/refoscone/" title="Refoscone">Refoscone</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/refosco-nostrano/">Refosco nostrano</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/refosco-nostrano-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="refosco nostrano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/refosco-nostrano-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/refosco-nostrano-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/refosco-nostrano-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/regent/" title="Regent">Regent</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/regent-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="regent vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/regent-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/regent-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/regent-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/rheinrieseling/" title="Rheinrieseling">Rheinrieseling</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/riesling-renano/">Riesling Renano</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/riesling-renano-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="riesling renano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/riesling-renano-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/riesling-renano-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/riesling-renano-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/ribolla/" title="Ribolla">Ribolla</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/ribolla-gialla/">Ribolla gialla</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/ribolla-gialla-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="ribolla gialla vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/ribolla-gialla-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ribolla-gialla-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ribolla-gialla-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/ribolla-gialla/" title="Ribolla gialla">Ribolla gialla</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/ribolla-gialla-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="ribolla gialla vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/ribolla-gialla-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ribolla-gialla-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ribolla-gialla-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/ribona/" title="Ribona">Ribona</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/maceratino/">Maceratino</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/maceratino-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="maceratino vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/maceratino-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/maceratino-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/maceratino-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/marche/">Marche</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/ribuele/" title="Ribuele">Ribuele</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/ribolla-gialla/">Ribolla gialla</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/ribolla-gialla-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="ribolla gialla vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/ribolla-gialla-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ribolla-gialla-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ribolla-gialla-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/riesling/" title="Riesling">Riesling</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/riesling-renano/">Riesling Renano</a>
                                                    , <a href="https://www.quattrocalici.it/vitigni/riesling-italico/">Riesling Italico</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/riesling-italico-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="riesling italico vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/riesling-italico-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/riesling-italico-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/riesling-italico-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/riesling-italico/" title="Riesling Italico">Riesling Italico</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/riesling-italico-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="riesling italico vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/riesling-italico-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/riesling-italico-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/riesling-italico-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/riesling-renano/" title="Riesling Renano">Riesling Renano</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/riesling-renano-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="riesling renano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/riesling-renano-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/riesling-renano-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/riesling-renano-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/riesling-x-sylvaner/" title="Riesling x Sylvaner">Riesling x Sylvaner</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/muller-thurgau/">Müller-Thurgau</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/muller-thurgau-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="müller-thurgau vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/muller-thurgau-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/muller-thurgau-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/muller-thurgau-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/rondinella/" title="Rondinella">Rondinella</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/rondinella-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="rondinella vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/rondinella-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/rondinella-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/rondinella-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/rosen-muskateller/" title="Rosen muskateller">Rosen muskateller</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/moscato-rosa/">Moscato rosa</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-rosa-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="moscato rosa vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-rosa-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-rosa-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/moscato-rosa-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-rosa/">Bacca rosa</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/rossanella/" title="Rossanella">Rossanella</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/molinara/">Molinara</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/molinara-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="molinara vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/molinara-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/molinara-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/molinara-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/rossano/" title="Rossano">Rossano</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/molinara/">Molinara</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/molinara-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="molinara vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/molinara-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/molinara-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/molinara-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/rossese/" title="Rossese">Rossese</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/rossese-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="rossese vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/rossese-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/rossese-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/rossese-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/liguria/">Liguria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/rossese-bianco/" title="Rossese bianco">Rossese bianco</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/rossese-bianco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="rossese bianco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/rossese-bianco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/rossese-bianco-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/rossese-bianco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/rossetta/" title="Rossetta">Rossetta</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/rossignola/">Rossignola</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/rossignola-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="rossignola vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/rossignola-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/rossignola-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/rossignola-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/rossetto/" title="Rossetto">Rossetto</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/trebbiano-giallo/">Trebbiano giallo</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-giallo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="trebbiano giallo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-giallo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-giallo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-giallo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lazio/">Lazio</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/rossignola/" title="Rossignola">Rossignola</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/rossignola-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="rossignola vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/rossignola-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/rossignola-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/rossignola-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/rossola/" title="Rossola">Rossola</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/rossola-nera/">Rossola nera</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/rossola-nera-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="rossola nera vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/rossola-nera-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/rossola-nera-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/rossola-nera-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lombardia/">Lombardia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/rossola-nera/" title="Rossola nera">Rossola nera</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/rossola-nera-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="rossola nera vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/rossola-nera-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/rossola-nera-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/rossola-nera-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lombardia/">Lombardia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/rotberger/" title="Rotberger">Rotberger</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/rotberger-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="rotberger vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/rotberger-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/rotberger-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/rotberger-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/roter-malvasier/" title="Roter Malvasier">Roter Malvasier</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/malvasia-nera/">Malvasia nera</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malvasia nera vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-160x160.jpg 160w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-nera-235x235.jpg 235w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/roussanne/" title="Roussanne">Roussanne</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/roussanne-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="roussanne vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/roussanne-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/roussanne-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/roussanne-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/ruche/" title="Ruchè">Ruchè</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/ruche-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="ruchè vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/ruche-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ruche-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ruche-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/rulander/" title="Ruländer">Ruländer</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/pinot-grigio/">Pinot grigio</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-grigio-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pinot grigio vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-grigio-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-grigio-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-grigio-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-grigia/">Bacca grigia</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/s-lunardo/" title="S. Lunardo">S. Lunardo</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/s-lunardo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="s. lunardo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/s-lunardo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/s-lunardo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/s-lunardo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/sagrantino/" title="Sagrantino">Sagrantino</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/sagrantino-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="sagrantino vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/sagrantino-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sagrantino-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sagrantino-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/umbria/">Umbria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/saint-laurent/" title="Saint Laurent">Saint Laurent</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/saint-laurent-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="saint laurent vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/saint-laurent-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/saint-laurent-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/saint-laurent-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/sangiovese/" title="Sangiovese">Sangiovese</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/sangiovese-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="sangiovese vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/sangiovese-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sangiovese-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sangiovese-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                    , <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                    , <a href="https://www.quattrocalici.it/regione/marche/">Marche</a>
                                                    , <a href="https://www.quattrocalici.it/regione/molise/">Molise</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/sangioveto/" title="Sangioveto">Sangioveto</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/sangiovese/">Sangiovese</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/sangiovese-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="sangiovese vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/sangiovese-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sangiovese-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sangiovese-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/santa-maria/" title="Santa Maria">Santa Maria</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/santa-maria-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="santa maria vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/santa-maria-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/santa-maria-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/santa-maria-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/sauvignon/" title="Sauvignon">Sauvignon</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/sauvignon-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="sauvignon vivigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/sauvignon-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sauvignon-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sauvignon-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/sauvignon-blanc/" title="Sauvignon blanc">Sauvignon blanc</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/sauvignon/">Sauvignon</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/sauvignon-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="sauvignon vivigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/sauvignon-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sauvignon-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sauvignon-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/valle-d-aosta/">Valle d &#8217;Aosta</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/savatiano/" title="Savatiano">Savatiano</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/08/savatiano-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="savatiano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/08/savatiano-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/08/savatiano-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/08/savatiano-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/schiava/" title="Schiava">Schiava</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/schiava-gentile/">Schiava gentile</a>
                                                    , <a href="https://www.quattrocalici.it/vitigni/schiava-grigia/">Schiava grigia</a>
                                                    , <a href="https://www.quattrocalici.it/vitigni/schiava-grossa/">Schiava grossa</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-gentile-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="schiava gentile vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-gentile-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-gentile-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-gentile-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/schiava-gentile/" title="Schiava gentile">Schiava gentile</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-gentile-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="schiava gentile vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-gentile-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-gentile-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-gentile-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/schiava-grigia/" title="Schiava grigia">Schiava grigia</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-grigia-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="schiava grigia vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-grigia-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-grigia-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-grigia-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/schiava-grossa/" title="Schiava grossa">Schiava grossa</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-grossa-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="schiava grossa vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-grossa-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-grossa-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-grossa-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/schioppettino/" title="Schioppettino">Schioppettino</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/schioppettino-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="schioppettino vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/schioppettino-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/schioppettino-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/schioppettino-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/sciaglin/" title="Sciaglin">Sciaglin</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/sciaglin-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="sciaglin vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/sciaglin-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sciaglin-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sciaglin-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/sciascinoso/" title="Sciascinoso">Sciascinoso</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/sciascinoso-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="sciascinoso vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/sciascinoso-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sciascinoso-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sciascinoso-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/campania/">Campania</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/scimiscia/" title="Scimiscià">Scimiscià</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/scimiscia-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="scimiscià vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/scimiscia-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/scimiscia-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/scimiscia-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/liguria/">Liguria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/semidano/" title="Semidano">Semidano</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/semidano-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="semidano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/semidano-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/semidano-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/semidano-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/semillon/" title="Sémillon">Sémillon</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/semillon-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="semillon vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/semillon-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/semillon-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/semillon-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/sennen/" title="Sennen">Sennen</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/sennen-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="sennen vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/sennen-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sennen-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sennen-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/serprino/" title="Serprino">Serprino</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/glera/">Glera</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/glera-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="glera vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/glera-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/glera-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/glera-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/sgavetta/" title="Sgavetta">Sgavetta</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/sgavetta-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="sgavetta vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/sgavetta-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sgavetta-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sgavetta-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/shiraz/" title="Shiraz">Shiraz</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/syrah/">Syrah</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/syrah-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="syrah vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/syrah-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/syrah-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2017/06/syrah-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/silvaner/" title="Silvaner">Silvaner</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/sylvaner-verde/">Sylvaner verde</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/sylvaner-verde-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="sylvaner verde vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/sylvaner-verde-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sylvaner-verde-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sylvaner-verde-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/sommarello/" title="Sommarello">Sommarello</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/uva-di-troia/">Uva di Troia</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/uva-di-troia-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="uva di troia vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/uva-di-troia-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/uva-di-troia-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/uva-di-troia-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/puglia/">Puglia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/spanna/" title="Spanna">Spanna</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/nebbiolo/">Nebbiolo</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/nebbiolo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="nebbiolo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/nebbiolo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nebbiolo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/nebbiolo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/spatburgunder/" title="Spätburgunder">Spätburgunder</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/pinot-nero/">Pinot nero</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/Pinot-nero-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="Pinot nero vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/Pinot-nero-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/Pinot-nero-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/Pinot-nero-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/spergola/" title="Spergola">Spergola</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/spergola-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="spergola vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/spergola-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/spergola-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/spergola-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/sumarello/" title="Sumarello">Sumarello</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/uva-di-troia/">Uva di Troia</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/uva-di-troia-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="uva di troia vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/uva-di-troia-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/uva-di-troia-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/uva-di-troia-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/puglia/">Puglia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/sussumariello/" title="Sussumariello">Sussumariello</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/susumaniello/">Susumaniello</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/susumaniello-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="susumaniello vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/susumaniello-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/susumaniello-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/susumaniello-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/puglia/">Puglia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/susumaniello/" title="Susumaniello">Susumaniello</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/susumaniello-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="susumaniello vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/susumaniello-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/susumaniello-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/susumaniello-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/puglia/">Puglia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/sylvaner/" title="Sylvaner">Sylvaner</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/sylvaner-verde/">Sylvaner verde</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/sylvaner-verde-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="sylvaner verde vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/sylvaner-verde-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sylvaner-verde-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sylvaner-verde-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/sylvaner-verde/" title="Sylvaner verde">Sylvaner verde</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/sylvaner-verde-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="sylvaner verde vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/sylvaner-verde-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sylvaner-verde-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/sylvaner-verde-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/syrah/" title="Syrah">Syrah</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/syrah-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="syrah vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/syrah-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/syrah-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2017/06/syrah-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/tai/" title="Tai">Tai</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/tocai-friulano/">Tocai Friulano</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/tocai-friulano-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="tocai friulano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/tocai-friulano-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/tocai-friulano-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/tocai-friulano-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/tai-rosso/" title="Tai rosso">Tai rosso</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/tocai-rosso/">Tocai rosso</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/tocai-rosso-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="tocai rosso vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/tocai-rosso-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/tocai-rosso-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/tocai-rosso-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/tannat/" title="Tannat">Tannat</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/09/tannat-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="tannat vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/09/tannat-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/09/tannat-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/09/tannat-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/tazzelenghe/" title="Tazzelenghe">Tazzelenghe</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/tazzelenghe-150x150.png" class="attachment-80 size-80 wp-post-image" alt="tazzelenghe vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/tazzelenghe-150x150.png 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/tazzelenghe-234x235.png 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/tazzelenghe-160x160.png 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/tempranillo/" title="Tempranillo">Tempranillo</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/tempranillo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="tempranillo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/tempranillo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/tempranillo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/tempranillo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/teran/" title="Teran">Teran</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/terrano/">Terrano</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/terrano-150x150.png" class="attachment-80 size-80 wp-post-image" alt="terrano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/terrano-150x150.png 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/terrano-234x235.png 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/terrano-160x160.png 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/teroldego/" title="Teroldego">Teroldego</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/teroldego-150x150.png" class="attachment-80 size-80 wp-post-image" alt="teroldego vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/teroldego-150x150.png 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/teroldego-234x235.png 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/teroldego-160x160.png 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/terrano/" title="Terrano">Terrano</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/terrano-150x150.png" class="attachment-80 size-80 wp-post-image" alt="terrano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/terrano-150x150.png 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/terrano-234x235.png 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/terrano-160x160.png 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/timorasso/" title="Timorasso">Timorasso</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/timorasso-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="timorasso vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/timorasso-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/timorasso-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/timorasso-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/piemonte/">Piemonte</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/tintilia/" title="Tintilia">Tintilia</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/tintilia-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="tintilia vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/tintilia-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/tintilia-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/tintilia-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/molise/">Molise</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/tocai-friulano/" title="Tocai Friulano">Tocai Friulano</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/tocai-friulano-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="tocai friulano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/tocai-friulano-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/tocai-friulano-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/tocai-friulano-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/tocai-rosso/" title="Tocai rosso">Tocai rosso</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/tocai-rosso-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="tocai rosso vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/tocai-rosso-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/tocai-rosso-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/tocai-rosso-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/torbato/" title="Torbato">Torbato</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/torbato-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="torbato vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/torbato-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/torbato-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/torbato-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/torrontes/" title="Torrontés">Torrontés</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/09/torrontes-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="torrontes vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/09/torrontes-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/09/torrontes-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/09/torrontes-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/touriga-nacional/" title="Touriga Nacional">Touriga Nacional</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/08/touriga-nacional-1-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vitigno touriga nacional" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/08/touriga-nacional-1-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/08/touriga-nacional-1-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/08/touriga-nacional-1-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/traminer-aromatico/" title="Traminer aromatico">Traminer aromatico</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/traminer-aromatico-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="traminer aromatico vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/traminer-aromatico-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/traminer-aromatico-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/traminer-aromatico-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-rosa/">Bacca rosa</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/trebbiano/" title="Trebbiano">Trebbiano</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/trebbiano-giallo/">Trebbiano giallo</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-giallo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="trebbiano giallo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-giallo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-giallo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-giallo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lazio/">Lazio</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/trebbiano-abruzzese/" title="Trebbiano Abruzzese">Trebbiano Abruzzese</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-abruzzese-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="trebbiano abruzzese vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-abruzzese-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-abruzzese-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-abruzzese-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/abruzzo/">Abruzzo</a>
                                                    , <a href="https://www.quattrocalici.it/regione/molise/">Molise</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/trebbiano-di-lugana/" title="Trebbiano di Lugana">Trebbiano di Lugana</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/trebbiano-di-soave/">Trebbiano di Soave</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-di-soave-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="trebbiano di soave vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-di-soave-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-di-soave-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-di-soave-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/trebbiano-di-soave/" title="Trebbiano di Soave">Trebbiano di Soave</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-di-soave-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="trebbiano di soave vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-di-soave-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-di-soave-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-di-soave-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                    , <a href="https://www.quattrocalici.it/regione/lombardia/">Lombardia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/trebbiano-giallo/" title="Trebbiano giallo">Trebbiano giallo</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-giallo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="trebbiano giallo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-giallo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-giallo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-giallo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lazio/">Lazio</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/trebbiano-romagnolo/" title="Trebbiano Romagnolo">Trebbiano Romagnolo</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-romagnolo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="trebbiano romagnolo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-romagnolo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-romagnolo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-romagnolo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/trebbiano-spoletino/" title="Trebbiano Spoletino">Trebbiano Spoletino</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-spoletino-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="trebbiano spoletino vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-spoletino-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-spoletino-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-spoletino-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/umbria/">Umbria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/trebbiano-toscano/" title="Trebbiano Toscano">Trebbiano Toscano</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-toscano-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="trebbiano toscano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-toscano-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-toscano-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-toscano-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/trollinger/" title="Trollinger">Trollinger</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/schiava-grossa/">Schiava grossa</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-grossa-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="schiava grossa vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-grossa-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-grossa-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-grossa-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/turbiana/" title="Turbiana">Turbiana</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/trebbiano-di-soave/">Trebbiano di Soave</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-di-soave-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="trebbiano di soave vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-di-soave-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-di-soave-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-di-soave-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/turchetta/" title="Turchetta">Turchetta</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/turchetta-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="turchetta vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/turchetta-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/turchetta-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/turchetta-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/ucelut/" title="Ucelut">Ucelut</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/ucelut-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="ucelut vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/ucelut-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ucelut-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/ucelut-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/ughetta/" title="Ughetta">Ughetta</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/vespolina/">Vespolina</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/vespolina-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vespolina vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/vespolina-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vespolina-160x160.jpg 160w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vespolina-235x235.jpg 235w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lombardia/">Lombardia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/ugni-blanc/" title="Ugni blanc">Ugni blanc</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/trebbiano-toscano/">Trebbiano Toscano</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-toscano-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="trebbiano toscano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-toscano-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-toscano-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/trebbiano-toscano-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/valle-d-aosta/">Valle d &#8217;Aosta</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/uva-d-oro/" title="Uva d&#8217;Oro">Uva d &#8217;Oro</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/fortana/">Fortana</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/fortana-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="fortana vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/fortana-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/fortana-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/fortana-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/uva-di-troia/" title="Uva di Troia">Uva di Troia</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/uva-di-troia-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="uva di troia vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/uva-di-troia-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/uva-di-troia-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/uva-di-troia-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/puglia/">Puglia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/uva-greca/" title="Uva Greca">Uva Greca</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/guardavalle/">Guardavalle</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/guardavalle-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="guardavalle vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/guardavalle-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/guardavalle-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/guardavalle-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/calabria/">Calabria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/uva-longanesi/" title="Uva Longanesi">Uva Longanesi</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/uva-longanesi-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="uva longanesi vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/uva-longanesi-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/uva-longanesi-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/uva-longanesi-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/emilia-romagna/">Emilia-Romagna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/uva-rara/" title="Uva rara">Uva rara</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/bonarda-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="bonarda vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/bonarda-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bonarda-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/bonarda-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lombardia/">Lombardia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/veltliner/" title="Veltliner">Veltliner</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/veltliner-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="veltliner vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/veltliner-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/veltliner-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/veltliner-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/verdea/" title="Verdea">Verdea</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/verdea-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="verdea vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/verdea-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/verdea-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/verdea-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lombardia/">Lombardia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/verdeca/" title="Verdeca">Verdeca</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/verdeca-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="verdeca vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/verdeca-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/verdeca-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/verdeca-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/puglia/">Puglia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/verdejo/" title="Verdejo">Verdejo</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/09/verdejo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="verdejo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/09/verdejo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/09/verdejo-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/09/verdejo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/verdello/" title="Verdello">Verdello</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/verdello-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="verdello vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/verdello-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/verdello-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/verdello-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/umbria/">Umbria</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/verdese/" title="Verdese">Verdese</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/verdese-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="verdese vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/verdese-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/verdese-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/verdese-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lombardia/">Lombardia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/verdicchio/" title="Verdicchio">Verdicchio</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/verdicchio-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="verdicchio vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/verdicchio-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/verdicchio-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/verdicchio-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/marche/">Marche</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/verdicchio-bianco/" title="Verdicchio bianco">Verdicchio bianco</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/verdicchio/">Verdicchio</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/verdicchio-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="verdicchio vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/verdicchio-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/verdicchio-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/verdicchio-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/marche/">Marche</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/verdina/" title="Verdina">Verdina</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/malvasia-bianca/">Malvasia bianca</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="malvasia bianca vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/malvasia-bianca-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/verdiso/" title="Verdiso">Verdiso</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/verdiso-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="verdiso vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/verdiso-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/verdiso-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/verdiso-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/verduzzo-friulano/" title="Verduzzo Friulano">Verduzzo Friulano</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/verduzzo-friulano-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="verduzzo friulano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/verduzzo-friulano-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/verduzzo-friulano-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/verduzzo-friulano-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/verduzzo-trevigiano/" title="Verduzzo Trevigiano">Verduzzo Trevigiano</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/verduzzo-trevigiano-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="verduzzo trevigiano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/verduzzo-trevigiano-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/verduzzo-trevigiano-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/verduzzo-trevigiano-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/vermentino/" title="Vermentino">Vermentino</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/vermentino-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vermentino vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/vermentino-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vermentino-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vermentino-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/liguria/">Liguria</a>
                                                    , <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                    , <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/vermentino-nero/" title="Vermentino nero">Vermentino nero</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/vermentino-nero-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vermentino nero vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/vermentino-nero-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vermentino-nero-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vermentino-nero-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/vernaccia/" title="Vernaccia">Vernaccia</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/vernaccia-nera/">Vernaccia nera</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/vernaccia-nera-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vernaccia nera vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/vernaccia-nera-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vernaccia-nera-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vernaccia-nera-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/marche/">Marche</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/vernaccia-di-oristano/" title="Vernaccia di Oristano">Vernaccia di Oristano</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/vernaccia-oristano-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vernaccia di oristano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/vernaccia-oristano-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vernaccia-oristano-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vernaccia-oristano-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sardegna/">Sardegna</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/vernaccia-di-san-gimignano/" title="Vernaccia di San Gimignano">Vernaccia di San Gimignano</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/vernaccia-san-gimignano-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vernaccia di san gimignano vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/vernaccia-san-gimignano-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vernaccia-san-gimignano-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vernaccia-san-gimignano-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/vernaccia-nera/" title="Vernaccia nera">Vernaccia nera</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/vernaccia-nera-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vernaccia nera vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/vernaccia-nera-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vernaccia-nera-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vernaccia-nera-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/marche/">Marche</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/vernatsch/" title="Vernatsch">Vernatsch</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/schiava-gentile/">Schiava gentile</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-gentile-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="schiava gentile vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-gentile-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-gentile-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/schiava-gentile-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/vespaiola/" title="Vespaiola">Vespaiola</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/vespaiola-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vespaiola vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/vespaiola-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vespaiola-160x160.jpg 160w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vespaiola-235x235.jpg 235w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/vespaiolo/" title="Vespaiolo">Vespaiolo</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/vespaiola/">Vespaiola</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/vespaiola-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vespaiola vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/vespaiola-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vespaiola-160x160.jpg 160w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vespaiola-235x235.jpg 235w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/vespolina/" title="Vespolina">Vespolina</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/vespolina-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vespolina vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/vespolina-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vespolina-160x160.jpg 160w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vespolina-235x235.jpg 235w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/lombardia/">Lombardia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/vien-de-nus/" title="Vien de Nus">Vien de Nus</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/vien-de-nus-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vien de nus vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/vien-de-nus-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vien-de-nus-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vien-de-nus-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/valle-d-aosta/">Valle d &#8217;Aosta</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/viognier/" title="Viognier">Viognier</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/viognier-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="viognier vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/viognier-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/viognier-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/viognier-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/toscana/">Toscana</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/vissanello/" title="Vissanello">Vissanello</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/pecorino/">Pecorino</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pecorino-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pecorino vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pecorino-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pecorino-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pecorino-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/abruzzo/">Abruzzo</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/vitouska/" title="Vitouska">Vitouska</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/vitovska/">Vitovska</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/vitovska-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vitovska vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/vitovska-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vitovska-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vitovska-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/vitovska/" title="Vitovska">Vitovska</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/vitovska-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vitovska vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/vitovska-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vitovska-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vitovska-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/friuli-venezia-giulia/">Friuli-Venezia Giulia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/vuillermin/" title="Vuillermin">Vuillermin</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/vuillermin-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="vuillermin vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/vuillermin-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vuillermin-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/vuillermin-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/valle-d-aosta/">Valle d &#8217;Aosta</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/weisburgunder/" title="Weißburgunder">Weißburgunder</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/pinot-bianco/">Pinot bianco</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-bianco-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="pinot bianco vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-bianco-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-bianco-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/pinot-bianco-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/welschriesling/" title="Welschriesling">Welschriesling</a>
                                                    (sinonimo di: <a href="https://www.quattrocalici.it/vitigni/riesling-italico/">Riesling Italico</a>
                                                    )
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/riesling-italico-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="riesling italico vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/riesling-italico-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/riesling-italico-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/riesling-italico-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/wildbacher/" title="Wildbacher">Wildbacher</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/wildbacher-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="wildbacher vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/wildbacher-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/wildbacher-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/wildbacher-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/veneto/">Veneto</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/xinomavro/" title="Xinomavro">Xinomavro</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/08/xinomavro-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="xinomavro vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/08/xinomavro-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/08/xinomavro-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/08/xinomavro-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/zibibbo/" title="Zibibbo">Zibibbo</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/zibibbo-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="zibibbo vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/zibibbo-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/zibibbo-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/zibibbo-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-bianca/">Bacca bianca</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/sicilia/">Sicilia</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/zinfandel/" title="Zinfandel">Zinfandel</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2020/09/zinfandel-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="zinfandel vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2020/09/zinfandel-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2020/09/zinfandel-230x230.jpg 230w, https://www.quattrocalici.it/wp-content/uploads/2020/09/zinfandel-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/vitigni/zweigelt/" title="Zweigelt">Zweigelt</a>
                                                </td>
                                                <td>
                                                    <img width="80" height="80" src="https://www.quattrocalici.it/wp-content/uploads/2017/06/zweigelt-150x150.jpg" class="attachment-80 size-80 wp-post-image" alt="zweigelt vitigno" loading="lazy" srcset="https://www.quattrocalici.it/wp-content/uploads/2017/06/zweigelt-150x150.jpg 150w, https://www.quattrocalici.it/wp-content/uploads/2017/06/zweigelt-234x235.jpg 234w, https://www.quattrocalici.it/wp-content/uploads/2017/06/zweigelt-160x160.jpg 160w" sizes="(max-width: 80px) 100vw, 80px"/>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/categoria-vitigni/bacca-nera/">Bacca nera</a>
                                                </td>
                                                <td>
                                                    <a href="https://www.quattrocalici.it/regione/trentino-alto-adige/">Trentino-Alto Adige</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>`);
interface Vineyard {
  name: string;
}
const createVineyardDb = (): Vineyard[] => {
  const vineyardDb: Vineyard[] = [];
  $('a').each(function (_i, el) {
    //console.log(_);
    const link = $(el).attr('href');
    if (link?.startsWith('https://www.quattrocalici.it/vitigni/')) {
      const vineyardName = $(el).text();
      vineyardDb.push({ name: vineyardName });
    }
  });
  return vineyardDb;
};

export default createVineyardDb;
