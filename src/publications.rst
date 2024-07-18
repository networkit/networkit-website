.. include:: <isonum.txt>

.. |br| raw:: html

  <br />

.. |separator| raw:: html

  <div style="padding-top: 25px; border-bottom: 1px solid #d4d7d9;"></div>

.. raw:: html

  <script type="text/javascript" src="_static/mathjax.js?config=TeX-AMS-MML_HTMLorMML"></script>

.. role:: raw-latex(raw)
  :format: latex html

.. _publications:

============
Publications
============

The following is a list of publications on the basis of NetworKit. We ask you to **cite** the appropriate ones if you found NetworKit useful for your own research.
Also, we would appreciate it if you pointed us to your publications in which you used NetworKit and allowed us to reference them on this page.

Papers on NetworKit as a Software Toolkit
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: latex html

  <h5><b>Note</b>: If you use NetworKit for your publication and want to cite it, best use the most recent publication (first one listed on this page).</h5>
  <br>

  <ul>
      <li>
        E. Angriman, A. van der Grinten, M. Hamann, H. Meyerhenke and M. Penschuck: <b>Algorithms for Large-Scale Network Analysis and the NetworKit Toolkit</b>. Algorithms for Big Data: DFG Priority Program 1736. Springer Nature Switzerland, 2023. pp. 3-20.
        [<a href="https://link.springer.com/chapter/10.1007/978-3-031-21534-6_1">arXiv</a>]
        <button type="button" class="btn-link collapsed"></button>
        <div class="collapse">
          <b>Abstract.</b> The abundance of massive network data in a plethora of applications makes scalable analysis algorithms and software tools necessary to generate 
          knowledge from such data in reasonable time. Addressing scalability as well as other requirements such as good usability and a rich feature set, the open-source 
          software NetworKit has established itself as a popular tool for large-scale network analysis. This chapter provides a brief overview of the contributions to NetworKit 
          made by the SPP 1736. Algorithmic contributions in the areas of centrality computations, community detection, and sparsification are in the focus, but we also mention 
          several other aspects – such as current software engineering principles of the project and ways to visualize network data within a NetworKit-based workflow.
        </div>
    </li>
    <br>
    <li>
        C. Staudt, A. Sazonovs and H. Meyerhenke: <b>NetworKit: A Tool Suite for Large-scale Complex Network Analysis</b>. Network Science 4(4), pp. 508-530, December 2016. Cambridge University Press.
        [<a href="http://arxiv.org/abs/1403.3005">arXiv</a>]
        <button type="button" class="btn-link collapsed"></button>
        <div class="collapse">
          <b>Abstract.</b> We introduce NetworKit, an open-source software package for analyzing the structure of large complex networks. Appropriate algorithmic solutions
          are required to handle increasingly common large graph data sets containing up to billions of connections. We describe the methodology applied to develop scalable
          solutions to network analysis problems, including techniques like parallelization, heuristics for computationally expensive problems, efficient data structures,
          and modular software architecture. Our goal for the software is to package results of our algorithm engineering efforts and put them into the hands of domain experts.
          NetworKit is implemented as a hybrid combining the kernels written in C++ with a Python front end, enabling integration into the Python ecosystem of tested tools for
          data analysis and scientific computing. The package provides a wide range of functionality (including common and novel analytics algorithms and graph generators) and
          does so via a convenient interface. In an experimental comparison with related software, NetworKit shows the best performance on a range of typical analysis tasks.
        </div>
    </li>
  </ul>

|separator|


Publications on Algorithms Available in NetworKit
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: latex html

  <ul>

  <li>
  E. Angriman, A. Grinten, M. Predari, H. Meyerhenke:
  <b>New Approximation Algorithms for Forest Closeness Centrality - for Individual Vertices and Vertex Groups</b>. 
  In <i>Proceedings of the 2021 SIAM International Conference on Data Mining</i> (SDM 2021)
  [<a href="https://arxiv.org/abs/2010.15435">arXiv</a>]

  <button type="button" class="btn-link collapsed"></button>
  <div id="collapseDiv" class="collapse">
  <b>Abstract.</b>

  The emergence of massive graph data sets requires fast mining algorithms. Centrality measures to 
  identify important vertices belong to the most popular analysis methods in graph mining. 
  A measure that is gaining attention is forest closeness centrality; it is closely related to electrical 
  measures using current flow but can also handle disconnected graphs. Recently, [Jin et al., ICDM'19] 
  proposed an algorithm to approximate this measure probabilistically. Their algorithm processes small 
  inputs quickly, but does not scale well beyond hundreds of thousands of vertices.
  In this paper, we first propose a different approximation algorithm; it is up to two orders of magnitude 
  faster and more accurate in practice. Our method exploits the strong connection between uniform spanning 
  trees and forest distances by adapting and extending recent approximation algorithms for related single-vertex 
  problems. This results in a nearly-linear time algorithm with an absolute probabilistic error guarantee. 
  In addition, we are the first to consider the problem of finding an optimal group of vertices w.r.t. forest 
  closeness. We prove that this latter problem is NP-hard; to approximate it, we adapt a greedy algorithm 
  by [Li et al., WWW'19], which is based on (partial) matrix inversion. Moreover, our experiments show that 
  on disconnected graphs, group forest closeness outperforms existing centrality measures in the context of 
  semi-supervised vertex classification. 
  </div>
  </li>

  <br>
  <li>
  E. Angriman, R. Becker, G. D'Angelo, H. Gilbert, A. van der Grinten, H. Meyerhenke:
  <b>Group-Harmonic and Group-Closeness Maximization -- Approximation and Engineering</b>. 
  In <i>Proceedings of the Symposium on Algorithm Engineering and Experiments</i> (ALENEX 2021)
  [<a href="https://arxiv.org/abs/2010.15435">arXiv</a>]

  <button type="button" class="btn-link collapsed"></button>
  <div id="collapseDiv" class="collapse">
  <b>Abstract.</b>

  Centrality measures characterize important nodes in networks. Efficiently 
  computing such nodes has received a lot of attention. When considering the 
  generalization of computing central groups of nodes, challenging optimization 
  problems occur. In this work, we study two such problems, group-harmonic 
  maximization and group-closeness maximization both from a theoretical and from 
  an algorithm engineering perspective.
  On the theoretical side, we obtain the following results. For group-harmonic 
  maximization, unless P=NP, there is no polynomial-time algorithm that achieves 
  an approximation factor better than \(1−1/e\) (directed) and \(1−1/(4e)\) (undirected), 
  even for unweighted graphs. On the positive side, we show that a greedy algorithm 
  achieves an approximation factor of \(\lambda(1−2/e)\) (directed) and \(\lambda(1−1/e)/2\) (undirected), 
  where \(\lambda\) is the ratio of minimal and maximal edge weights. For group-closeness maximization, 
  the undirected case is NP-hard to be approximated to within a factor better than 
  \(1−1/(e+1)\) and a constant approximation factor is achieved by a local-search algorithm. 
  For the directed case, however, we show that, for any \(\epsilon<1/2\), the problem is 
  NP-hard to be approximated within a factor of \(4|V|^{−\epsilon}\).
  From the algorithm engineering perspective, we provide efficient implementations 
  of the above greedy and local search algorithms. In our experimental study we 
  show that, on small instances where an optimum solution can be computed in reasonable 
  time, the quality of both the greedy and the local search algorithms come very close 
  to the optimum. On larger instances, our local search algorithms yield results with 
  superior quality compared to existing greedy and local search solutions, at the cost 
  of additional running time. We thus advocate local search for scenarios where solution 
  quality is of highest concern. 
  </div>
  </li>

  <br>
  <li>
  E. Angriman, A. van der Grinten, M. Predari and H. Meyerhenke:
  <b>Approximation of the Diagonal of a Laplacian's Pseudoinverse for Complex Network Analysis</b>. 
  In <i>Proc. 2020 - 28th Annual European Symposium on Algorithms.</i> (ESA 2020)
  [<a href="https://arxiv.org/abs/2006.13679">arXiv</a>]

  <button type="button" class="btn-link collapsed"></button>
  <div id="collapseDiv" class="collapse">
  <b>Abstract.</b>

  The ubiquity of massive graph data sets in numerous applications requires
  fast algorithms for extracting knowledge from these data. We are motivated
  here by three electrical measures for the analysis of large small-world
  graphs \(G=(V,E)\) -- i.e., graphs with diameter in \(O(log|V|)\), which are abundant
  in complex network analysis. From a computational point of view, the three
  measures have in common that their crucial component is the diagonal of the
  graph Laplacian's pseudoinverse, L'. Computing \(diag(L')\) exactly by
  pseudoinversion, however, is as expensive as dense matrix multiplication --
  and the standard tools in practice even require cubic time. Moreover, the
  pseudoinverse requires quadratic space -- hardly feasible for large graphs.
  Resorting to approximation by, e.g., using the Johnson-Lindenstrauss
  transform, requires the solution of \(O(log|V|/eps^2)\) Laplacian linear systems to
  guarantee a relative error, which is still very expensive for large inputs.
  In this paper, we present a novel approximation algorithm that requires the
  solution of only one Laplacian linear system. The remaining parts are purely
  combinatorial -- mainly sampling uniform spanning trees, which we relate to
  \(diag(L')\) via effective resistances. For small-world networks, our algorithm
  obtains a ±eps-approximation with high probability, in a time that is
  nearly-linear in \(|E|\) and quadratic in \(1/eps\). Another positive aspect of our
  algorithm is its parallel nature due to independent sampling. We thus provide
  two parallel implementations of our algorithm: one using OpenMP, one MPI +
  OpenMP. In our experiments against the state of the art, our algorithm (i)
  yields more accurate results, (ii) is much faster and more memory-efficient,
  and (iii) obtains good parallel speedups, in particular in the distributed
  setting.
  </div>
  </li>

  <br>
  <li>
  A. van der Grinten, H. Meyerhenke:
  <b>Scaling Betweenness Approximation to Billions of Edges by MPI-based Adaptive Sampling</b>. 
  In <i>Proc. 2020 - 34th International Parallel and Distributed Processing Symposium.</i> (IPDPS 2020)
  [<a href="https://arxiv.org/abs/1910.11039">arXiv</a>]

  <button type="button" class="btn-link collapsed"></button>
  <div id="collapseDiv" class="collapse">
  <b>Abstract.</b>
    Betweenness centrality is one of the most popular vertex centrality measures in network analysis. Hence, many (sequential and parallel) algorithms to compute or approximate betweenness have been devised. Recent algorithmic advances have made it possible to approximate betweenness very efficiently on shared-memory architectures. Yet, the best shared-memory algorithms can still take hours of running time for large graphs, especially for graphs with a high diameter or when a small relative error is required.
    In this work, we present an MPI-based generalization of the state-of-the-art shared-memory algorithm for betweenness approximation. This algorithm is based on adaptive sampling; our parallelization strategy can be applied in the same manner to adaptive sampling algorithms for other problems. In experiments on a 16-node cluster, our MPI-based implementation is by a factor of 16.1x faster than the state-of-the-art shared-memory implementation when considering our parallelization focus -- the adaptive sampling phase -- only. For the complete algorithm, we obtain an average (geom. mean) speedup factor of 7.4x over the state of the art. For some previously very challenging inputs, this speedup is much higher. As a result, our algorithm is the first to approximate betweenness centrality on graphs with several billion edges in less than ten minutes with high accuracy.
  </div>
  </li>

  <br>
  <li>
  E. Angriman, A. van der Grinten, H. Meyerhenke:
  <b>Local Search for Group Closeness Maximization on Big Graphs</b>. 
  In <i>Proc. 2019 IEEE International Conference on Big Data.</i> (BigData 2019)
  [<a href="https://arxiv.org/abs/1911.03360">arXiv</a>]

  <button type="button" class="btn-link collapsed"></button>
  <div id="collapseDiv" class="collapse">
  <b>Abstract.</b>
    In network analysis and graph mining, closeness centrality is a popular measure to infer the
    importance of a vertex. Computing closeness efficiently for individual vertices
    received considerable attention. The NP-hard problem of <i>group closeness maximization</i>,
    in turn, is more challenging: the objective is to find a vertex <i>group</i> that is central
    <i>as a whole</i> and state-of-the-art heuristics for it do not scale to
    very big graphs yet.

    In this paper, we present new local search heuristics
    for group closeness maximization.
    By using randomized approximation techniques and dynamic data structures,
    our algorithms are often able to perform locally optimal decisions efficiently.
    The final result is a group with high (but not optimal) closeness centrality.

    We compare our algorithms to the current state-of-the-art
    greedy heuristic both on weighted and on unweighted real-world graphs.
    For graphs with hundreds of millions of edges,
    our local search algorithms take only around ten minutes, while greedy requires more than ten hours.
    Overall, our new algorithms are between one and two orders of magnitude faster,
    depending on the desired group size and solution quality.
    For example, on weighted graphs and \(k = 10\), our algorithms yield solutions
    of 12.4% higher quality, while also being
    793.6x faster.
    For unweighted graphs and \(k = 10\), we achieve solutions within
    99.4% of the state-of-the-art quality
    while being 127.8x faster.
  </div>
  </li>

  <br>
  <li>
  E. Angriman, A. van der Grinten, Aleksandar Bojchevski, Daniel Zügner, Stephan Günnemann, H. Meyerhenke:
  <b>Group Centrality Maximization for Large-scale Graphs</b>. 
  In <i>Proc. 22nd SIAM Symposium on Algorithm Engineering & Experiments</i> (ALENEX 2020)
  [<a href="https://arxiv.org/pdf/1910.13874.pdf">arXiv</a>]

  <button type="button" class="btn-link collapsed"></button>
  <div class="collapse">
  <b>Abstract.</b>
    The study of vertex centrality measures is a key aspect of network analysis.
    Naturally, such centrality measures have been generalized to <i>groups</i> of vertices;
    for popular measures it was shown that the problem of finding the most central group
    is NP-hard.
    As a result, approximation algorithms to maximize group centralities were introduced recently.
    Despite a nearly-linear running time, approximation algorithms for group betweenness
    and (to a lesser extent) group closeness are rather slow on large networks due to
    high constant overheads.

    That is why we introduce GED-Walk centrality,
    a new submodular group centrality measure inspired by Katz centrality.
    In contrast to closeness and betweenness, it considers walks of any
    length rather than shortest paths,
    with shorter walks having a higher contribution.
    We define algorithms that (i) efficiently approximate the GED-Walk
    score of a given group and (ii) efficiently approximate the
    (proved to be NP-hard) problem of finding a group with highest GED-Walk score.

    Experiments on several real-world datasets show that scores obtained by GED-Walk improve performance on common graph mining tasks such as collective classification and graph-level classification.
    An evaluation of empirical running times demonstrates that
    maximizing GED-Walk (in approximation) is two orders of magnitude
    faster compared to group betweenness approximation
    and for group sizes ≤ 100 one to two orders faster than group closeness approximation.
    For graphs with tens of millions of
    edges, GED-Walk maximization typically needs less than one minute.
    Furthermore, our experiments suggest that the maximization algorithms scale
    linearly with the size of the input graph and the size of the group.
  </div>
  </li>

  <br>
  <li>
  A.v.d. Grinten, E. Angriman, H. Meyerhenke:
  <b>Parallel Adaptive Sampling with almost no Synchronization</b>. 
  In <i>Proceedings of the 25th International Conference on Parallel and Distributed Computing</i> (Euro-Par 2019)
  [<a href="https://arxiv.org/abs/1903.09422">arXiv</a>]
  [<a href="https://doi.org/10.1007/978-3-030-29400-7_31">DOI: 10.1007/978-3-030-29400-7_31</a>]
  <button type="button" class="btn-link collapsed"></button>
  <div class="collapse">
  <b>Abstract.</b>
  Approximation via sampling is a widespread technique whenever exact solutions are too expensive. In this paper, we present techniques for an efficient parallelization of adaptive (a. k. a. progressive) sampling algorithms on multi-threaded shared-memory machines. Our basic algorithmic technique requires no synchronization except for atomic load-acquire and store-release operations. It does, however, require \(O(n)\) memory per thread, where n is the size of the sampling state. We present variants of the algorithm that either reduce this memory consumption to O(1) or ensure that deterministic results are obtained. Using the KADABRA algorithm for betweenness centrality (a popular measure in network analysis) approximation as a case study, we demonstrate the empirical performance of our techniques. In particular, on a 32-core machine, our best algorithm is 2.9x faster than what we could achieve using a straightforward OpenMP-based parallelization and 65.3x faster than the existing implementation of KADABRA.

  </div>
  </li>

  <br>
  <li>
  A.v.d. Grinten, E. Bergamini, O. Green, D. A. Bader, H. Meyerhenke:
  <b>Scalable Katz Ranking Computation in Large Static and Dynamic Graphs</b>. 
  In <i>26th Annual European Symposium on Algorithms</i> (ESA 2018)
  [<a href="https://arxiv.org/abs/1807.03847">arXiv</a>]
  [<a href="http://drops.dagstuhl.de/opus/volltexte/2018/9505/">DOI: 10.4230/LIPIcs.ESA.2018.42</a>]
  <button type="button" class="btn-link collapsed"></button>
  <div class="collapse">
  <b>Abstract.</b>
  Network analysis defines a number of centrality measures to identify the most central nodes in a network. Fast computation of those measures is a major challenge in algorithmic network analysis. Aside from closeness and betweenness, Katz centrality is one of the established centrality measures. In this paper, we consider the problem of computing rankings for Katz centrality. In particular, we propose upper and lower bounds on the Katz score of a given node. While previous approaches relied on numerical approximation or heuristics to compute Katz centrality rankings, we construct an algorithm that iteratively improves those upper and lower bounds until a correct Katz ranking is obtained. We extend our algorithm to dynamic graphs while maintaining its correctness guarantees. Experiments demonstrate that our static graph algorithm outperforms both numerical approaches and heuristics with speedups between 1.5 x and 3.5 x, depending on the desired quality guarantees. Our dynamic graph algorithm improves upon the static algorithm for update batches of less than 10000 edges. We provide efficient parallel CPU and GPU implementations of our algorithms that enable near real-time Katz centrality computation for graphs with hundreds of millions of nodes in fractions of seconds.
  </div>
  </li>

  <br>

  <li>
    C. J. Carstens, M. Hamann, U. Meyer, M. Penschuck, H. Tran, D. Wagner:
    <b>Parallel and I/O-efficient Randomisation of Massive Networks using Global Curveball Trades</b>. 
    In <i>26th Annual European Symposium on Algorithms</i> (ESA 2018)
    [<a href="https://arxiv.org/abs/1804.08487">arXiv</a>]
    [<a href="http://drops.dagstuhl.de/opus/volltexte/2018/9474/">DOI: 10.4230/LIPIcs.ESA.2018.11</a>]
    <button type="button" class="btn-link collapsed"></button>
    <div class="collapse">
    <b>Abstract.</b>
    Graph randomisation is a crucial task in the analysis and synthesis of networks. It is typically implemented as an edge switching process (ESMC) repeatedly swapping the nodes of random edge pairs while maintaining the degrees involved [Mihail and Zegura, 2003]. Curveball is a novel approach that instead considers the whole neighbourhoods of randomly drawn node pairs. Its Markov chain converges to a uniform distribution, and experiments suggest that it requires less steps than the established ESMC [Carstens et al., 2016]. Since trades however are more expensive, we study Curveball's practical runtime by introducing the first efficient Curveball algorithms: the I/O-efficient EM-CB for simple undirected graphs and its internal memory pendant IM-CB. Further, we investigate global trades [Carstens et al., 2016] processing every node in a single super step, and show that undirected global trades converge to a uniform distribution and perform superior in practice. We then discuss EM-GCB and EM-PGCB for global trades and give experimental evidence that EM-PGCB achieves the quality of the state-of-the-art ESMC algorithm EM-ES [M. Hamann et al., 2017] nearly one order of magnitude faster.
    </div>
  </li>

  <br>

  <li>
  F.B. Mocnik: 
  <b>The Polynomial Volume Law of Complex Networks in the Context of Local and Global Optimization</b>. 
  In <i>Scientific Reports</i>, volume 8, Article number: 11274 (2018).
  [<a href="https://doi.org/10.1038/s41598-018-29131-0">DOI: 10.1038/s41598-018-29131-0</a>]
  <button type="button" class="btn-link collapsed"></button>
  <div class="collapse">
  <b>Abstract.</b>
  Many complex networks expose global hub structures: for some nodes, the number of incident edges far exceeds the average, leading to a small average shortest path length. Such ‘small-world properties’ are often guided by a scale-free power-law distribution of the node degrees, and self-organization inside the network has been identified as a reason driving the emergence of this structure. Small-world networks have recently raised lots of interest, because they capture the global topology of the World-Wide Web, metabolic, and social networks. While small-world networks reflect global structures, little attention is paid to the local structure of complex networks. In this article neighbourhoods are demonstrated to share a common local structure in many real complex networks, manifested by a polynomial volume law. This law can, in case of networks that are embedded in space, be explained in terms of the embedding and the properties of Euclidean space. A model of hierarchical spatial networks is introduced to examine the effect of global structures, in particular of hierarchies, on the polynomial volume law. It turns out that the law is robust against the coexistence of such global structures. The local structure of space and global optimization can both be found in transport, brain, and communication networks, which suggests the polynomial volume law, often in combination with hierarchies or other global optimization principles, to be a generic property inherent to many networks.
  </div>
  </li>

   <br>

  <li>
    P. Bisenius, E. Bergamini, E. Angriman, H. Meyerhenke: 
    <b>Computing Top-k Closeness Centrality in Fully-dynamic Graphs</b>. 
    In <i>Proc. 20th SIAM Workshop on Algorithm Engineering & Experiments</i> (ALENEX 2018)
      [<a href="https://arxiv.org/abs/1710.01143">arXiv</a>]
       [<a href="http://epubs.siam.org/doi/10.1137/1.9781611975055.3">DOI: 10.1137/1.9781611975055.3</a>]
    <button type="button" class="btn-link collapsed"></button>
    <div class="collapse">
    <b>Abstract.</b>
    Closeness is a widely-studied centrality measure. Since it requires all pairwise distances, computing closeness for all nodes is infeasible for large real-world networks. However, for many applications, it is only necessary to find the k most central nodes and not all closeness values. Prior work has shown that computing the top-k nodes with highest closeness can be done much faster than computing closeness for all nodes in real-world networks. However, for networks that evolve over time, no dynamic top-k closeness algorithm exists that improves on static recomputation. In this paper, we present several techniques that allow us to efficiently compute the k nodes with highest (harmonic) closeness after an edge insertion or an edge deletion. Our algorithms use information obtained during earlier computations to omit unnecessary work. However, they do not require asymptotically more memory than the static algorithms (i. e., linear in the number of nodes). We propose separate algorithms for complex networks (which exhibit the small-world property) and networks with large diameter such as street networks, and we compare them against static recomputation on a variety of real-world networks. On many instances, our dynamic algorithms are two orders of magnitude faster than recomputation; on some large graphs, we even reach average speedups between \(10^3\) and \(10^4\).
    </div>
  </li>

  <br>

  <li>
    E. Bergamini, T. Gonser, H. Meyerhenke: 
    <b>Scaling up Group Closeness Maximization</b>. 
    In <i>Proc. 20th SIAM Workshop on Algorithm Engineering & Experiments</i> (ALENEX 2018)
      [<a href="https://arxiv.org/abs/1710.01144">arXiv</a>]
       [<a href="http://epubs.siam.org/doi/10.1137/1.9781611975055.18">DOI: 10.1137/1.9781611975055.18</a>]
    <button type="button" class="btn-link collapsed"></button>
    <div class="collapse">
    <b>Abstract.</b>
    Closeness is a widely-used centrality measure in social network analysis. For a node it indicates the inverse average shortest-path distance to the other nodes of the network. While the identification of the k nodes with highest closeness received significant attention, many applications are actually interested in finding a group of nodes that is central as a whole. For this problem, only recently a greedy algorithm with approximation ratio \((1-1/e)\) has been proposed [Chen et al., ADC 2016]. Since this algorithm's running time is still expensive for large networks, a heuristic without approximation guarantee has also been proposed in the same paper. In the present paper we develop new techniques to speed up the greedy algorithm without losing its theoretical guarantee. Compared to a straightforward implementation, our approach is orders of magnitude faster and, compared to the heuristic proposed by Chen et al., we always find a solution with better quality in a comparable running time in our experiments. Our method Greedy++ allows us to approximate the group with maximum closeness on networks with up to hundreds of millions of edges in minutes or at most a few hours. To have the same theoretical guarantee, the greedy approach by [Chen et al., ADC 2016] would take several days already on networks with hundreds of thousands of edges. In a comparison with the optimum, our experiments show that the solution found by Greedy++ is actually much better than the theoretical guarantee. Over all tested networks, the empirical approximation ratio is never lower than 0.97. Finally, we study for the first time the correlation between the top-k nodes with highest individual closeness and an approximation of the most central group in large networks. Our results show that the overlap between the two is relatively small, which indicates empirically the need to distinguish between the two problems.
    </div>
  </li>

  <br>

  <li>
    C. L. Staudt, M. Hamann, A. Gutfraind, I. Safro, H. Meyerhenke: 
    <b>Generating realistic scaled complex networks</b>. 
    In Journal of Applied Network Science, Volume 2, 2017.
      [<a href="https://arxiv.org/abs/1609.02121">arXiv</a>]
       [<a href="https://doi.org/10.1007/s41109-017-0054-z">DOI:  10.1007/s41109-017-0054-z</a>]
    <button type="button" class="btn-link collapsed"></button>
    <div class="collapse">
    <b>Abstract.</b>
    Research on generative models plays a central role in the emerging field of network science, studying how statistical patterns found in real networks could be generated by formal rules. Output from these generative models is then the basis for designing and evaluating computational methods on networks including verification and simulation studies. During the last two decades, a variety of models has been proposed with an ultimate goal of achieving comprehensive realism for the generated networks. In this study, we (a) introduce a new generator, termed ReCoN; (b) explore how ReCoN and some existing models can be fitted to an original network to produce a structurally similar replica, (c) use ReCoN to produce networks much larger than the original exemplar, and finally (d) discuss open problems and promising research directions. In a comparative experimental study, we find that ReCoN is often superior to many other state-of-the-art network generation methods. We argue that ReCoN is a scalable and effective tool for modeling a given network while preserving important properties at both micro- and macroscopic scales, and for scaling the exemplar data by orders of magnitude in size.
    </div>
  </li>

  <br>

  <li>
    E. Bergamini, M. Wegner, D. Lukarski, H. Meyerhenke: 
    <b>Estimating Current-Flow Closeness Centrality with a Multigrid Laplacian Solver</b>. 
    In Proc. <i><a href="http://www.eecs.wsu.edu/~assefaw/CSC16/csc16.html">CSC</a> '16</i>. SIAM, 2016.
      [<a href="https://arxiv.org/abs/1607.02955">arXiv</a>]
       [<a href="http://epubs.siam.org/doi/abs/10.1137/1.9781611974690.ch1">DOI:  10.1137/1.9781611974690.ch1</a>]
    <button type="button" class="btn-link collapsed"></button>
    <div class="collapse">
    <b>Abstract.</b>
    Matrices associated with graphs, such as the Laplacian, lead to numerous interesting graph problems expressed as linear systems. One field where Laplacian linear systems
      play a role is network analysis, e. g. for certain centrality measures that indicate if a node (or an edge) is important in the network. One such centrality measure is current-flow closeness.
      To allow network analysis workflows to profit from a fast Laplacian solver, we provide an implementation of the LAMG multigrid solver in the NetworKit package, facilitating the computation
      of current-flow closeness values or related quantities. Our main contribution consists of two algorithms that accelerate the current-flow computation for one node or a reasonably small node
      subset significantly. One algorithm is an unbiased estimator using sampling, the other one is based on the Johnson- Lindenstrauss transform. Our inexact algorithms lead to very accurate
      results in practice. Thanks to them one is now able to compute an estimation of current-flow closeness of one node on networks with tens of millions of nodes and edges within seconds or a
      few minutes. From a network analytical point of view, our experiments indicate that current-flow closeness can discriminate among different nodes significantly better than traditional
      shortest-path closeness and is also considerably more resistant to noise – we thus show that two known drawbacks of shortest-path closeness are alleviated by the current-flow variant.
    </div>
  </li>

  <br>

    <li>
      M. von Looz, M. Özdayi, S. Laue, H. Meyerhenke: 
      <b>Generating massive complex networks with hyperbolic geometry faster in practice</b>. 
      In Proc. <i><a href="http://ieee-hpec.org/">HPEC</a> '16</i>. IEEE, 2016. [<a href="http://arxiv.org/abs/1606.09481">arXiv</a>]
      <button type="button" class="btn-link collapsed"></button>
      <div class="collapse">
      <b>Abstract.</b>
      Generative network models play an important role in algorithm development, scaling studies, network analysis, and realistic system benchmarks for graph data sets.   The commonly used graph-based benchmark model R-MAT has some drawbacks concerning realism and the scaling behavior of network properties.
        A complex network model gaining considerable popularity builds random hyperbolic graphs, generated by distributing points within a disk in the hyperbolic plane and then adding edges between points whose hyperbolic distance is below a threshold.
        We present in this paper a fast generation algorithm for such graphs.
        Our experiments show that our new generator achieves speedup factors of x3-60 over the best previous implementation.
        One billion edges can now be generated in under one minute on a shared-memory workstation.
        Furthermore, we present a dynamic extension to model gradual network change, while preserving at each step the point position probabilities.
      </div>
    </li>

    <br>

    <li>
      M. von Looz, H. Meyerhenke: 
      <b>Querying Probabilistic Neighborhoods in Spatial Data Sets Efficiently</b>. 
      In Proc. <i><a href="http://iwoca2016.cs.helsinki.fi/">IWOCA 2016</a></i>, Springer, 2016. [<a href="http://arxiv.org/abs/1509.01990">arXiv</a>]
      <button type="button" class="btn-link collapsed"></button>
      <div class="collapse">
      <b>Abstract.</b>
      The probability that two spatial objects establish some kind of mutual connection often depends on their proximity.
        To formalize this concept, we define the notion of a <i>probabilistic neighborhood</i>:
        \(\newcommand{\dist}{\operatorname{dist}}\)
        Let \(P\) be a set of \(n\) points in \(\mathbb{R}^d\),  \(q \in \mathbb{R}^d\) a query point, \(\dist\) a distance metric, and \(f : \mathbb{R}^+ \rightarrow [0,1]\) a monotonically decreasing function.
        Then, the probabilistic neighborhood \(N(q, f)\) of \(q\) with respect to \(f\) is
        a random subset of \(P\) and each point \(p \in P\) belongs to \(N(q,f)\) with probability \(f(\dist(p,q))\).
        Possible applications include query sampling and the simulation of probabilistic spreading phenomena, as well as other scenarios where the probability of a connection between two entities decreases with their distance.
        We present a fast, sublinear-time query algorithm to sample probabilistic neighborhoods from planar point sets.
        For certain distributions of planar \(P\), we prove that our algorithm answers a query in \(O((|N(q,f)| + \sqrt{n})\log n)\) time with high probability.
        In experiments this yields a speedup over pairwise distance probing of at least one order of magnitude, even for rather small data sets with \(n=10^5\) and also for other point distributions not covered by the theoretical results.
      </div>
    </li>

    <br>

    <li>
      E. Bergamini, H. Meyerhenke: 
      <b>Approximating Betweenness Centrality in Fully-dynamic Networks</b>. 
      In <i>Internet Mathematics</i>, Volume 12, Issue 5, 2016.
      [<a href="https://arxiv.org/abs/1510.07971">arXiv</a>]
       [<a href="https://doi.org/10.1080/15427951.2016.1177802">DOI:  10.1080/15427951.2016.1177802</a>]
        <button type="button" class="btn-link collapsed"></button>
      <div class="collapse">
      <b>Abstract.</b>
      Betweenness is a well-known centrality measure that ranks the nodes of a network according to their participation in shortest paths. Since an exact
        computation is prohibitive in large networks, several approximation algorithms have been proposed. Besides that, recent years have seen the publication of dynamic
        algorithms for efficient recomputation of betweenness in networks that change over time. In this paper we propose the first betweenness centrality approximation
        algorithms with a provable guarantee on the maximum approximation error for dynamic networks. Several new intermediate algorithmic results contribute to the
        respective approximation algorithms: (i) new upper bounds on the vertex diameter, (ii) the first fully-dynamic algorithm for updating an approximation of the
        vertex diameter in undirected graphs, and (iii) an algorithm with lower time complexity for updating single-source shortest paths in unweighted graphs after a batch
        of edge actions. Using approximation, our algorithms are the first to make in-memory computation of betweenness in dynamic networks with millions of edges feasible.
        Our experiments show that our algorithms can achieve substantial speedups compared to recomputation, up to several orders of magnitude. Moreover, the approximation
        accuracy is usually significantly better than the theoretical guarantee in terms of absolute error. More importantly, for reasonably small approximation error
        thresholds, the rank of nodes is well preserved, in particular for nodes with high betweenness.
      </div>
    </li>

    <br>

    <li>
      G. Lindner, C. L. Staudt, M. Hamann, H. Meyerhenke, D. Wagner: 
      <b>Structure-Preserving Sparsification Methods for Social Networks</b>. 
      To appear in <i>Social Network Analysis
      and Mining</i>.
      <button type="button" class="btn-link collapsed"></button>
      <div class="collapse">
        <b>Abstract.</b> Sparsification reduces the size of networks while preserving structural and statistical properties of interest. Various sparsifying algorithms have been
        proposed in different contexts. We contribute the first systematic conceptual and experimental comparison of edge sparsification methods on a diverse set of network
        properties. It is shown that they can be understood as methods for rating edges by importance and then filtering globally or locally by these scores. We show
        that applying a local filtering technique improves the preservation of all kinds of properties. In addition, we propose a new sparsifi- cation method (Local Degree)
        which preserves edges leading to local hub nodes. All methods are evaluated on a set of social networks from Facebook, Google+, Twitter and LiveJournal with respect
        to network properties including diameter, connected components, community structure, multiple node centrality measures and the behavior of epidemic simulations.
        In order to assess the preservation of the community structure, we also include experiments on synthetically generated networks with ground truth communities.
        Experiments with our implementations of the sparsification methods (included in the open-source network analysis tool suite NetworKit) show that many network
        properties can be preserved down to about 20% of the original set of edges for sparse graphs with a reasonable density. The experimental results allow us to
        differentiate the behavior of different methods and show which method is suitable with respect to which property. While our Local Degree method is best for
        preserving connectivity and short distances, other newly introduced local variants are best for preserving the community structure.
      </div>
    </li>

    <br>

    <li>
      E. Bergamini, M. Borassi, P. Crescenzi, A. Marino, H. Meyerhenke: 
      <b>Computing Top-k Closeness Centrality Faster in Unweighted Graphs</b>. 
      In <i>Proc. 18th SIAM Workshop on Algorithm
      Engineering & Experiments</i> (ALENEX 2016).
      [<a href="https://arxiv.org/abs/1704.01077">arXiv</a>]
       [<a href="http://epubs.siam.org/doi/abs/10.1137/1.9781611974317.6">DOI:  10.1137/1.9781611974317.6</a>]
        <button type="button" class="btn-link collapsed"></button>
        <div class="collapse">
        <b>Abstract.</b> Centrality indices are widely used analytic measures for the importance of nodes in a network. Closeness centrality is very popular among these measures.
        For a single node v, it takes the sum of the distances of v to all other nodes into account. The currently best algorithms in practical applications for
        computing the closeness for all nodes exactly in unweighted graphs are based on breadth-first search (BFS) from every node. Thus, even for sparse graphs,
        these algorithms require quadratic running time in the worst case, which is prohibitive for large networks. <br>
        In many relevant applications, however, it is un- necessary to compute closeness values for all nodes. Instead, one requires only the k nodes with the highest
        closeness values in descending order. Thus, we present a new algorithm for computing this top-k ranking in unweighted graphs. Following the rationale of previous
        work, our algorithm significantly re- duces the number of traversed edges. It does so by computing upper bounds on the closeness and stopping the current BFS search
        when k nodes already have higher closeness than the bounds computed for the other nodes.<br>
        In our experiments with real-world and synthetic instances of various types, one of these new bounds is good for small-world graphs with low diameter (such as
        social networks), while the other one excels for graphs with high diameter (such as road networks). Combining them yields an algorithm that is faster than the state
        of the art for top-k computations for all test instances, by a wide margin for high-diameter.
      </div>
    </li>

    <br>

    <li>
      M. von Looz, R. Prutkin and H. Meyerhenke: 
      <b>Fast Generation of Complex Networks with Underlying Hyperbolic Geometry</b>. 
      In <i>Proc. 26th International Symposium on
      Algorithms and Computation</i> (ISAAC 2015). Code in NetworKit. [<a href="http://arxiv.org/abs/1501.03545">arXiv</a>]
        <button type="button" class="btn-link collapsed"></button>
        <div class="collapse">
        <b>Abstract.</b> Complex networks have become increasingly popular for mod- eling various real-world phenomena. Realistic generative network models are important in
        this context as they avoid privacy concerns of real data and simplify complex network research regarding data sharing, reproducibility, and scalability studies.
        Random hyperbolic graphs are a well-analyzed family of geometric graphs. Previous work provided empir- ical and theoretical evidence that this generative graph
        model creates networks with non-vanishing clustering and other realistic features. How- ever, the investigated networks in previous applied work were small,
        possibly due to the quadratic running time of a previous generator.
        In this work we provide the first generation algorithm for these networks with subquadratic running time. We prove a time complexity of
        \(\mathcal{O}((n^{3/2} + m) \log n)\) with high probability for the generation process. This running time is confirmed by experimental data with our
        implementation. The acceleration stems primarily from the reduction of pairwise distance computations through a polar quadtree, which we adapt to hyperbolic
        space for this purpose. In practice we improve the running time of a previous implementation by at least two orders of magnitude this way. Networks with billions
        of edges can now be generated in a few minutes. Finally, we evaluate the largest networks of this model published so far. Our empirical analysis shows that
        important features are retained over different graph densities and degree distributions.
      </div>
    </li>

    <br>

    <li>
      E. Bergamini and H. Meyerhenke: 
      <b>Fully-dynamic Approximation of Betweenness Centrality</b>. 
      In <i>Proc. 23rd European Symposium on Algorithms</i> (ESA 2015). [<a href="http://arxiv.org/abs/1504.07091">arXiv</a>]
       [<a href="https://link.springer.com/chapter/10.1007/978-3-662-48350-3_14">DOI:  10.1007/978-3-662-48350-3_14</a>]
        <button type="button" class="btn-link collapsed"></button>
        <div class="collapse">
        <b>Abstract.</b> Betweenness is a well-known centrality measure that ranks the nodes of a network according to their participation in shortest paths. Since an
        exact computation is prohibitive in large networks, several approximation algorithms have been proposed. Besides that, recent years have seen the publication of
        dynamic algorithms for efficient recomputation of betweenness in evolving networks. In previous work we proposed the first semi-dynamic algorithms that recompute
        an approximation of betweenness in connected graphs after batches of edge insertions.In this paper we propose the first fully-dynamic approximation algorithms
        (for weighted and unweighted undirected graphs that need not to be connected) with a provable guarantee on the maximum approximation error. The transfer to
        fully-dynamic and disconnected graphs implies additional algorithmic problems that could be of independent interest. In particular, we propose a new upper bound
        on the vertex diameter for weighted undirected graphs. For both weighted and unweighted graphs, we also propose the first fully-dynamic algorithms that keep
        track of this upper bound. In addition, we extend our former algorithm for semi- dynamic BFS to batches of both edge insertions and deletions. <br>
        Using approximation, our algorithms are the first to make in-memory computation of betweenness in fully-dynamic networks with millions of edges feasible.
        Our experiments show that they can achieve substantial speedups compared to recomputation, up to several orders of magnitude.
      </div>
    </li>

    <br>

    <li>
      E. Bergamini, H. Meyerhenke and  C. Staudt: 
      <b>Approximating Betweenness Centrality in Large Evolving Networks</b>. 
      In <i>Proc. 17th SIAM Workshop on Algorithm Engineering & Experiments</i>
      (ALENEX 2015). [<a href="http://arxiv.org/abs/1409.6241">arXiv</a>] [<a href="http://dx.doi.org/10.1137/1.9781611973754.12">DOI: 10.1137/1.9781611973754.12</a>]
        <button type="button" class="btn-link collapsed"></button>
        <div class="collapse">
        <b>Abstract.</b> Betweenness centrality ranks the importance of nodes by their participation in all shortest paths of the network. Therefore computing exact
        betweenness values is impractical in large networks. For static networks, approximation based on randomly sampled paths has been shown to be significantly faster
        in practice. However, for dynamic networks, no approximation algorithm for betweenness centrality is known that improves on static recomputation. We address this
        deficit by proposing two incremental approximation algorithms (for weighted and unweighted connected graphs) which provide a provable guarantee on the absolute
        approximation error. Processing batches of edge insertions, our algorithms yield significant speedups up to a factor of 104 compared to restarting the approximation.
        This is enabled by investing memory to store and efficiently update shortest paths. As a building block, we also propose an asymptotically faster algorithm for
        updating the SSSP problem in unweighted graphs. Our experimental study shows that our algorithms are the first to make in-memory computation of a betweenness
        ranking practical for million-edge semi-dynamic networks. Moreover, our results show that the accuracy is even better than the theoretical guarantees in terms of
        absolutes errors and the rank of nodes is well preserved, in particular for those with high betweenness.
      </div>
    </li>


    <br>

    <li>
      C. Staudt, Y. Marrakchi, H. Meyerhenke: 
      <b>Detecting Communities Around Seed Nodes in Complex Networks</b>. 
      In <i>Proc. First International Workshop on High Performance
      Big Graph Data Management, Analysis, and Mining</i>, co-located with the <i>IEEE BigData 2014 conference</i>.
        <button type="button" class="btn-link collapsed"></button>
        <div class="collapse">
        <b>Abstract.</b> The detection of communities (internally dense subgraphs) is a network analysis task with manifold applications. The special task of selective
        community detection is concerned with finding high-quality communities locally around seed nodes. Given the lack of conclusive experimental studies, we perform
        a systematic comparison of different previously published as well as novel methods. In particular we evaluate their performance on large complex networks,
        such as social networks. Algorithms are compared with respect to accuracy in detecting ground truth communities, community quality measures, size of communities
        and running time. We implement a generic greedy algorithm which subsumes several previous efforts in the field. Experimental evaluation of multiple objective
        functions and optimizations shows that the frequently proposed greedy approach is not adequate for large datasets. As a more scalable alternative, we propose
        selSCAN, our adaptation of a global, density-based community detection algorithm. In a novel combination with algebraic distances on graphs, query times can
        be strongly reduced through preprocessing. However, selSCAN is very sensitive to the choice of numeric parameters, limiting its practicality. The
        random-walk-based PageRankNibble emerges from the comparison as the most successful candidate.
      </div>
    </li>

    <br>

    <li>
      C. Staudt and H. Meyerhenke: 
      <b>Engineering Parallel Algorithms for Community Detection in Massive Networks</b>. 
      Accepted by <i>IEEE Transactions on Parallel and
      Distributed Systems</i> (TPDS). [<a href="http://arxiv.org/abs/1304.4453">arXiv</a>]
      [<a href="http://dx.doi.org/10.1109/TPDS.2015.2390633">DOI: 10.1109/TPDS.2015.2390633</a>] &#169; 2015 IEEE
        <button type="button" class="btn-link collapsed"></button>
        <div class="collapse">
        Please note that <a href="https://algohub.iti.kit.edu/parco/NetworKit/NetworKit/archive/9cfacca668d8f4e4740d880877fee34beb276792.zip?subrepos=false">NetworKit 3.5</a>
        is the last version to include an implementation of the EPP algorithm. <br><br>

        <b>Abstract</b> The amount of graph-structured data has recently experienced an enormous growth in many applications. To transform such data into useful
        information, fast analytics algorithms and software tools are necessary. One common graph analytics kernel is disjoint community detection (or graph clustering).
        Despite extensive research on heuristic solvers for this task, only few parallel codes exist, although parallelism will be necessary to scale to the data volume
        of real-world applications. We address the deficit in computing capability by a flexible and extensible community detection framework with shared-memory parallelism.
        Within this framework we design and implement efficient parallel community detection heuristics: A parallel label propagation scheme; the first large-scale
        parallelization of the well-known Louvain method, as well as an extension of the method adding refinement; and an ensemble scheme combining the above.
        In extensive experiments driven by the algorithm engineering paradigm, we identify the most successful parameters and combinations of these algorithms. We also
        compare our implementations with state-of-the-art competitors. The processing rate of our fastest algorithm often reaches 50M edges/second. We recommend the
        parallel Louvain method and our variant with refinement as both qualitatively strong and fast. Our methods are suitable for massive data sets with billions of
        edges.
      </div>
    </li>

    <br>

    <li>
      C. Staudt and H. Meyerhenke: 
      <b>Engineering High-Performance Community Detection Heuristics for Massive Graphs</b>. 
      In: <i>Proceedings of the 2013 International Conference on
      Parallel Processing</i>. [<a href="http://arxiv.org/abs/1304.4453">updated and extended version on arXiv</a>,
      <a href="https://networkit.github.io/data/uploads/publications/sm2013ehpcdh.bib">bibtex</a>]
        <button type="button" class="btn-link collapsed"></button>
        <div class="collapse">
        <b>Abstract</b> The amount of graph-structured data has recently experienced an enormous growth in many applications. To transform such data into useful information,
        high-performance analytics algorithms and software tools are necessary. One common graph analytics kernel is community detection (or graph clustering). Despite
        extensive research on heuristic solvers for this task, only few parallel codes exist, although parallelism will be necessary to scale to the data volume of
        real-world applications. We address the deficit in computing capability by a flexible and extensible community detection framework with shared-memory parallelism.
        Within this framework we design and implement efficient parallel community detection heuristics: A parallel label propagation scheme; the first large-scale
        parallelization of the well-known Louvain method, as well as an extension of the method adding refinement; and an ensemble scheme combining the strengths of the
        above. In extensive experiments driven by the algorithm engineering paradigm, we identify the most successful parameters and combinations of these algorithms.
        We also compare our implementations with state of the art competitors. The processing rate of our fastest algorithm often exceeds 10M edges/second, making it
        suitable for massive data streams. We recommend the parallel Louvain method and our variant with refinement as both qualitatively strong and relatively fast.
        Moreover, our fast ensemble algorithm yields a good tradeoff between quality and speed for community detection in very large networks.
      </div>
    </li>

    <br>

    <li>
      C. Staudt, M. Hamann, I. Safro, A. Gutfraind and H. Meyerhenke: 
      <b>Generating Scaled Replicas of Real-World Complex Networks</b>. 
      In: <i>Proceedings of the 5th International Workshop on Complex Networks and their Applications</i> [<a href="https://arxiv.org/abs/1609.02121">arXiv</a>]
        <button type="button" class="btn-link collapsed"></button>
        <div class="collapse">
        <b>Abstract</b> Research on generative models plays a central role in the emerging field of network science, studying how statistical patterns found in real networks can be generated by formal rules. During the last two decades, a variety of models has been proposed with an ultimate goal of achieving comprehensive realism for the generated networks. In this study, we (a) introduce a new generator, termed ReCoN; (b) explore how models can be fitted to an original network to produce a structurally similar replica, and (c) aim for producing much larger networks than the original exemplar. In a comparative experimental study, we find ReCoN often superior to many other state-of-the-art network generation methods. Our design yields a scalable and effective tool for replicating a given network while preserving important properties at both micro- and macroscopic scales and (optionally) scaling the replica by orders of magnitude in size. We recommend ReCoN as a general practical method for creating realistic test data for the engineering of computational methods on networks, verification, and simulation studies. We provide scalable open-source implementations of most studied methods, including ReCoN.
      </div>
    </li>

  </ul>


|separator|

Publications Using NetworKit (notable examples)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

  <ul>
    <li>
      L. Berner and H. Meyerhenke: 
      <b>Introducing Total Harmonic Resistance for Graph Robustness under Edge Deletions</b>. 
      In <i>Proceedings of ECML PKDD 2024</i>. [<a href="https://arxiv.org/abs/2407.11521">Link</a>] to arXiv pre-print.
        <button type="button" class="btn-link collapsed"></button>
        <div class="collapse">
         <b>Abstract</b> Assessing and improving the robustness of a graph G are critical steps in network design and analysis. To this end, we consider the optimisation problem of removing k edges from G such that the resulting graph has minimal robustness, simulating attacks or failures. In this paper, we propose total harmonic resistance as a new robustness measure for this purpose - and compare it to the recently proposed forest index [Zhu et al., IEEE Trans. Inf. Forensics and Security, 2023]. Both measures are related to the established total effective resistance measure, but their advantage is that they can handle disconnected graphs. This is also important for originally connected graphs due to the removal of the k edges. To compare our measure with the forest index, we first investigate exact solutions for small examples. The best k edges to select when optimizing for the forest index lie at the periphery. Our proposed measure, in turn, prioritizes more central edges, which should be beneficial for most applications. Furthermore, we adapt a generic greedy algorithm to our optimization problem with the total harmonic resistance. With this algorithm, we perform a case study on the Berlin road network and also apply the algorithm to established benchmark graphs. The results are similar as for the small example graphs above and indicate the higher suitability of the new measure. 
       </div>
    </li>

    <br>
    
    <li>
      J. Adamczyk, W. Czech:
      <b>Strengthening Structural Baselines for Graph Classification Using Local Topological Profile</b>.
      In <i>Mikyška, J., de Mulatier, C., Paszynski, M., Krzhizhanovskaya, V.V., Dongarra, J.J., Sloot, P.M. (eds) Computational Science – ICCS 2023. ICCS 2023. Lecture Notes in Computer Science, vol 10476. Springer, Cham.</i> [<a href="https://link.springer.com/chapter/10.1007/978-3-031-36027-5_47">Springer</a>]
        <button type="button" class="btn-link collapsed"></button>
        <div class="collapse">
         <b>Abstract</b> 
          We present the analysis of the topological graph descriptor Local Degree Profile (LDP), which forms a widely used structural baseline for graph classification. Our study focuses on model evaluation in the context of the recently developed fair evaluation framework, which defines rigorous routines for model selection and evaluation for graph classification, ensuring reproducibility and comparability of the results. Based on the obtained insights, we propose a new baseline algorithm called Local Topological Profile (LTP), which extends LDP by using additional centrality measures and local vertex descriptors. The new approach provides the results outperforming or very close to the latest GNNs for all datasets used. Specifically, state-of-the-art results were obtained for 4 out of 9 benchmark datasets. We also consider computational aspects of LDP-based feature extraction and model construction to propose practical improvements affecting execution speed and scalability. This allows for handling modern, large datasets and extends the portfolio of benchmarks used in graph representation learning. As the outcome of our work, we obtained LTP as a simple to understand, fast and scalable, still robust baseline, capable of outcompeting modern graph classification models such as Graph Isomorphism Network (GIN). We provide open-source implementation at <a href="https://github.com/j-adamczyk/LTP">GitHub</a>. 
        </div>
    </li>

    <br>

    <li>
      Z. Su, J. Kurths and H. Meyerhenke: 
      <b>Skeleton-Based Clustering by Quasi-Threshold Editing</b>. 
      In <i>Algorithms for Big Data: DFG Priority Program 1736</i> issue 2023, 134-151. [<a href="https://link.springer.com/chapter/10.1007/978-3-031-21534-6_7">Springer Nature</a>]
        <button type="button" class="btn-link collapsed"></button>
        <div class="collapse">
         <b>Abstract</b> We consider the problem of transforming a given graph into a quasi-threshold graph using a minimum number of edge additions and deletions. Building on the previously proposed heuristic Quasi-Threshold Mover (QTM), we present improvements both in terms of running time and quality. We propose a novel, linear-time algorithm that solves the inclusion-minimal variant of this problem, i.e., a set of edge edits such that no subset of them also transforms the given graph into a quasi-threshold graph. In an extensive experimental evaluation, we apply these algorithms to a large set of graphs from different applications and find that they lead QTM to find solutions with fewer edits. Although the inclusion-minimal algorithm needs significantly more edits on its own, it outperforms the initialization heuristic previously proposed for QTM. 
       </div>
    </li>

    <br>

    <li>
      U. Brandes, M. Hamann, L. Häuser and D. Wagner: 
      <b>Network Sparsification via Degree- and Subgraph-based Edge Sampling</b>. 
      In <i>Proceedings of ASONAM 2022</i>. [<a href="https://arxiv.org/abs/2301.03032">Link</a>] to arXiv pre-print.
        <button type="button" class="btn-link collapsed"></button>
        <div class="collapse">
         <b>Abstract</b> Network (or graph) sparsification compresses a graph by removing inessential edges. By reducing the data volume, it accelerates or even facilitates many downstream analyses. Still, the accuracy of many sparsification methods, with filtering-based edge sampling being the most typical one, heavily relies on an appropriate definition of edge importance. Instead, we propose a different perspective with a generalized local-property-based sampling method, which preserves (scaled) local node characteristics. Apart from degrees, these local node characteristics we use are the expected (scaled) number of wedges and triangles a node belongs to. Through such a preservation, main complex structural properties are preserved implicitly. We adapt a game-theoretic framework from uncertain graph sampling by including a threshold for faster convergence (at least 4 times faster empirically) to approximate solutions. Extensive experimental studies on functional climate networks show the effectiveness of this method in preserving macroscopic to mesoscopic and microscopic network structural properties. 
       </div>
    </li>

    <br>

    <li>
      E. Angriman, F. Brandt-Tumescheit, L. Franke, A. van der Grinten and H. Meyerhenke: 
      <b>Interactive Visualization of Protein RINs using NetworKit in the Cloud</b>. 
      In <i>Proceedings of IPDPSW 2022</i>. [<a href="https://ieeexplore.ieee.org/document/9835218">IEEE</a>]
        <button type="button" class="btn-link collapsed"></button>
        <div class="collapse">
         <b>Abstract</b> Network analysis has been applied in diverse application domains. We consider an application from protein dynamics, specifically residue interaction networks (RINs). While numerous RIN visualization tools exist, there are no solutions that are both easily programmable and as fast as optimized network analysis toolkits. In this work, we use NetworKit - an established package for network analysis - to build a cloud-based environment that enables domain scientists to run their visualization and analysis workflows on large compute servers, without requiring extensive programming and/or system administration knowledge. To demonstrate the versatility of this approach, we use it to build a custom Jupyter-based widget for RIN visualization. In contrast to existing RIN visualization approaches, our widget can easily be customized through simple modifications of Python code, while both supporting a comprehensive feature set and providing near real-time speed. Due to its integration into Jupyter notebooks, our widget can easily interact with other popular packages of the Python ecosystem to build custom analysis pipelines (e.g., pipelines that feed RIN data into downstream machine learning tasks).
       </div>
    </li>

    <br>


    <li>
      S. Valentini, F. Gandolfi, M. Carolo, D. Dalfovo, L. Pozza and A. Romanel:  
      <b>Polympact: exploring functional relations among common human genetic variants</b>. 
      In <i>Nucleic Acids Research</i> vol 50, Issue 3, 22 February 2022, Pages 1335–1350. [<a href="https://academic.oup.com/nar/article/50/3/1335/6513575">Oxford Academic</a>]
        <button type="button" class="btn-link collapsed"></button>
        <div class="collapse">
         <b>Abstract</b> In the last years, many studies were able to identify associations between common genetic variants and complex diseases. However, the mechanistic biological links explaining these associations are still mostly unknown. Common variants are usually associated with a relatively small effect size, suggesting that interactions among multiple variants might be a major genetic component of complex diseases. Hence, elucidating the presence of functional relations among variants may be fundamental to identify putative variants interactions. To this aim, we developed Polympact, a web-based resource that allows to explore functional relations among human common variants by exploiting variants functional element landscape, their impact on transcription factor binding motifs, and their effect on transcript levels of protein-coding genes. Polympact characterizes over 18 million common variants and allows to explore putative relations by combining clustering analysis and innovative similarity and interaction network models. The properties of the network models were studied and the utility of Polympact was demonstrated by analysing the rich sets of Breast Cancer and Alzheimer's GWAS variants. We identified relations among multiple variants, suggesting putative interactions. Polympact is freely available at bcglab.cibio.unitn.it/polympact.
       </div>
    </li>

    <br>

    <li>
      J. Kreutel, S. Martus, E. Thomalla and D. Zimmer: 
      <b>Die Germanistik der Germanistik</b>. 
      In <i>Internationales Archiv für Sozialgeschichte der deutschen Literatur</i> issue 44, vol. 2, 2019. [<a href="https://www.degruyter.com/view/journals/iasl/44/2/article-p302.xml">De Gruyter</a>]
        <button type="button" class="btn-link collapsed"></button>
        <div class="collapse">
         <b>Abstract</b> The article examines the history and structure of the international bibliographical journal (internationales Referatenorgan) Germanistik from 1960 to 2009. By combining qualitative archival research and quantitative data analysis, it seeks to explore how the journal simultaneously took into account political, economic, and academic expectations; how it stimulated scholarly working practices; and how it contributed to the formation of networks within the heterogeneous field of German Studies.
       </div>
    </li>

    <br>

    <li>
      R. Glantz, H. Meyerhenke: 
      <b>Many-to-many Correspondences between Partitions: Introducing a Cut-based Approach</b>. 
      To appear in <i>Proc. 18th SIAM Intl. Conf. on Data Mining</i> (SDM 2018). [<a href="https://arxiv.org/abs/1603.04788">arXiv</a>]
        <button type="button" class="btn-link collapsed"></button>
        <div class="collapse">
         <b>Abstract</b> Let \(P\) and \(P'\) be finite partitions of the set \(V\). Finding good correspondences between the parts of \(P\) and those of \(P'\) is helpful in classification, pattern recognition, and network analysis. Unlike common similarity measures for partitions that yield only a single value, we provide specifics on how \(P\) and \(P′\) correspond to each other.
         <br>
          To this end, we first define natural collections of best correspondences under three constraints \(C_{one}\), \(C_{two}\), and \(C_{three}\). In case of \(C_{one}\), the best correspondences form a minimum cut basis of a certain bipartite graph, whereas the other two lead to minimum cut bases of \(P\) w.r.t. \(P′\). We also introduce a constraint, \(C_{four}\), which tightens \(C_{three}\); both are useful for finding consensus partitions. We then develop branch-and-bound algorithms for finding minimum \(P_s-P_t\) cuts of \(P\) and thus \(\|P\|−1\) best correspondences under \(C_{two}\), \(C_{three}\), and \(C_{four}\), respectively.
          <br>
          In a case study, we use the correspondences to gain insight into a community detection algorithm. The results suggest, among others, that only very minor losses in the quality of the correspondences occur if the branch-and-bound algorithm is restricted to its greedy core. Thus, even for graphs with more than half a million nodes and hundreds of communities, we can find hundreds of best or almost best correspondences in less than a minute.
       </div>
    </li>

    <br>

    <li>
      M. Wegner, O. Taubert, A. Schug, H. Meyerhenke: 
      <b>Maxent-stress Optimization of 3D Biomolecular Models</b>. 
      In <i>Proc. 25th European Symposium on Algorithms</i> (ESA 2017). [<a href="https://arxiv.org/abs/1706.06805">arXiv</a>]
        <button type="button" class="btn-link collapsed"></button>
        <div class="collapse">
         <b>Abstract</b> Knowing a biomolecule's structure is inherently linked to and a prerequisite for any detailed understanding of its function. Significant effort has gone into developing technologies for structural characterization. These technologies do not directly provide 3D structures; instead they typically yield noisy and erroneous distance information between specific entities such as atoms or residues, which have to be translated into consistent 3D models.
        <br>
        Here we present an approach for this translation process based on maxent-stress optimization. Our new approach extends the original graph drawing method for the new application's specifics by introducing additional constraints and confidence values as well as algorithmic components. Extensive experiments demonstrate that our approach infers structural models (i. e., sensible 3D coordinates for the molecule's atoms) that correspond well to the distance information, can handle noisy and error-prone data, and is considerably faster than established tools. Our results promise to allow domain scientists nearly-interactive structural modeling based on distance constraints.
       </div>
    </li>

    <br>

    <li>
      M. Lozano, C. García-Martínez, F. J. Rodríguez, H. M. Trujillo: 
      <b>Optimizing network attacks by artificial bee colony</b>. 
      In <i>Information Sciences, Volume 377</i>, pp. 30-50, January 2017.
        <button type="button" class="btn-link collapsed"></button>
        <div class="collapse">
         <b>Abstract</b> Over the past few years, the task of conceiving effective attacks to complex networks has arisen as an optimization problem. Attacks are modelled as the process of removing a number k of vertices, from the graph that represents the network, and the goal is to maximise or minimise the value of a predefined metric over the graph. In this work, we present an optimization problem that concerns the selection of nodes to be removed to minimise the maximum betweenness
         centrality value of the residual graph. This metric evaluates the participation of the nodes in the communications through the shortest paths of the network.
        <br>
         To address the problem we propose an artificial bee colony algorithm, which is a swarm intelligence approach inspired in the foraging behaviour of honeybees. In this framework, bees produce new candidate solutions for the problem by exploring the vicinity of previous ones, called food sources. The proposed method exploits useful problem knowledge in this neighbourhood exploration by considering the partial destruction and heuristic reconstruction of selected solutions. The
         performance of the method, with respect to other models from the literature that can be adapted to face this problem, such as sequential centrality-based attacks, module-based attacks, a genetic algorithm, a simulated annealing approach, and a variable neighbourhood search, is empirically shown.
       </div>
    </li>

    <br>

    <li>
      M. Riondato, E. Upfal: 
      <b>ABRA: Approximating Betweenness Centrality in Static and Dynamic Graphs with Rademacher Averages</b>. 
      In <i>Proc. 22nd ACM SIGKDD Conference on Knowledge Discovery and Data Mining</i> (KDD 2016), August 2016. [<a href="http://arxiv.org/abs/1602.05866">arXiv</a>]
        <button type="button" class="btn-link collapsed"></button>
        <div class="collapse">
         <b>Abstract</b> We present ABRA, a suite of algorithms that compute and maintain probabilistically-guaranteed, high-quality, approximations of the betweenness centrality of all nodes
          (or edges) on both static and fully dynamic graphs. Our algorithms rely on random sampling and their analysis leverages on Rademacher averages and pseudodimension, fundamental
          concepts from statistical learning theory. To our knowledge, this is the first application of these concepts to the field of graph analysis. The results of our experimental evaluation
           show that our approach is much faster than exact methods, and vastly outperforms, in both speed and number of samples, current state-of-the-art algorithms with the same quality guarantees.
       </div>
    </li>

    <br>

    <li>
      M. von Looz, M. Wolter, C. Jacob, H. Meyerhenke: 
      <b>Better partitions of protein graphs for subsystem quantum chemistry</b>. 
      In <i>Proc. 15th Intl. Symp. on Experimental
      Algorithms</i> (SEA 2016), June 2016.
        <button type="button" class="btn-link collapsed"></button>
        <div class="collapse">
        <b>Abstract</b> Determining the interaction strength between proteins and small molecules is key to analyzing their biological function. Quantum-mechanical calculations
        such as Density Functional Theory (DFT) give accurate and theoretically well-founded results. With common implementations the running time of DFT calculations increases
        quadratically with molecule size. Thus, numerous subsystem-based approaches have been developed to accelerate quantum-chemical calculations. These approaches partition
        the protein into different fragments, which are treated separately. Interactions between different fragments are approximated and introduce inaccuracies in the
        calculated interaction energies. <br>
        To minimize these inaccuracies, we represent the amino acids and their interactions as a weighted graph in order to apply graph partitioning. None of the existing graph
        partitioning work can be directly used, though, due to the unique constraints in partitioning such protein graphs. We therefore present and evaluate several algorithms,
        partially building upon established concepts, but adapted to handle the new constraints. For the special case of partitioning a protein along the main chain, we
        also present an efficient dynamic programming algorithm that yields provably optimal results. In the general scenario our algorithms usually improve the previous
        approach significantly and take at most a few seconds.
      </div>
    </li>

    <br>

    <li>
      P. Crescenzi, G. D’Angelo, L. Severini, Y. Velaj: 
      <b>Greedily Improving Our Own Centrality in A Network</b>. 
      In <i>Proc. 14th Intl. Symp. on Experimental Algorithms</i> (SEA 2015).
       LNCS 9125, pp. 43-55. Springer International Publishing, 2015.
        <button type="button" class="btn-link collapsed"></button>
        <div class="collapse">
         <b>Abstract</b> The closeness and the betweenness centralities are two well-known measures of importance of a vertex within a given complex network. Having high
         closeness or betweenness centrality can have positive impact on the vertex itself: hence, in this paper we consider the problem of determining how much a vertex
         can increase its centrality by creating a limited amount of new edges incident to it. We first prove that this problem does not admit a polynomial-time approximation
         scheme (unless \(P=NP\)), and we then propose a simple greedy approximation algorithm (with an almost tight approximation ratio), whose performance is then tested
         on synthetic graphs and real-world networks.
       </div>
    </li>

    <br>

    <li>
      D. Hoske, D. Lukarski, H. Meyerhenke, M. Wegner: 
      <b>Is Nearly-linear the same in Theory and Practice? A Case Study with a Combinatorial Laplacian Solver</b>. 
      In <i>Proc. 14th Intl.
      Symp. on Experimental Algorithms</i> (SEA 2015). LNCS 9125, pp. 205-218. Springer International Publishing, 2015. [<a href="http://arxiv.org/abs/1502.07888">arXiv</a>]
        <button type="button" class="btn-link collapsed"></button>
        <div class="collapse">
       For the paper follow the arXiv link above. If you are interested in the implementation, see ParCo's <a href="http://parco.iti.kit.edu/software-en.shtml" >software page</a>.
       </div>
    </li>

  </ul>


|separator|

Projects Using NetworKit
~~~~~~~~~~~~~~~~~~~~~~~~

Further projects using NetworKit can be found on our projects `page <projects.html>`_ and on Google Scholar (`here <https://scholar.google.com/scholar?cites=4830058894162088419&as_sdt=2005&sciodt=0,5>`_ and `there <https://scholar.google.com/scholar?cites=2526066274193235127&as_sdt=2005&sciodt=0,5>`_).


|separator|

Student Theses Using NetworKit
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A list of student theses based on NetworKit can be found `here <student_theses.html>`_.
