.. |br| raw:: html

   <br />

.. role:: hidden
   :class: hidden

.. role:: underline
   :class: underline


====
News
====

.. just ignore the following header. This is a hack to make the other headings created with ~ smaller.

:hidden:`HiddenBiggerHeadingFont`
---------------------------------

September 08, 2020: **NetworKit 7.1 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:underline:`New features for Contributors / Developers`

- We restructured the Cython-Interface (responsible for the connection between Python and C++ core-libraries) in order to make development and maintenance more approachable. As a result the previous monolithic file :code:`_NetworKit.pyx` is now split into modules, resembling the structure of the C++ code. New modules can be added easily by providing appropriate Cython-files in sub-folder `networkit <https://github.com/networkit/networkit/tree/master/networkit>`_.

:underline:`Further Improvements`

- Refactored the `EdgeListReader`, leading to a speed-up when reading in edge-list based graph files.

:underline:`Additional Notes`

- Beginning with release :code:`7.1` (:code:`7.0` also available) NetworKit is now also distributed via package managers conda, spack and brew. All channels provide different packages for the C++ headers/library and the complete Python/C++ software. Head over to `github <https://github.com/networkit/networkit>`_ for installation instructions.

|
|


May 29, 2020: **NetworKit 7.0 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:underline:`New Features`

- New algorithms for GedWalk centrality based on the paper `Group Centrality Maximization for Large-scale Graphs <https://arxiv.org/abs/1910.13874>`_ (ALENEX 2020).
- New parallel implementation of the `Hayashi et al. algorithm <https://www.ijcai.org/Proceedings/16/Papers/525.pdf>`_ for spanning edge centrality approximation.
- PageRank: possibility to choose between the L1 and the L2 norms as stopping criterion of the algorithm, and to set a maximum number of iterations.
- GlobalThresholdFilter: support for weighted and directed graphs.


:underline:`Notable Bugfixes`

- CommuteTimeDistance now returns the correct distance between two nodes for computation with and without preprocessing
- Fix of an error in the :code:`exportGraph`-function of GephiStreaming
- Fix of an error in APSP that returned wrong distances in disconnected graphs


:underline:`Further Improvements`

- Support for newer Python-version: 3.8
- Support for newer compiler: gcc 10.1, AppleClang 11.03
- Reduce memory footprint of several functions/classes: BFS, Dijkstra, SSSP, TopCloseness
- Reduce time-complexity of several functions/classes: GephiStreamer, StaticDegreeSequenceGenerator, TopCloseness, WattsStrogatzGenerator
- Added more notebook as examples


:underline:`Additional Notes for Contributors Developers`

- Development will be done on the master branch, the Dev branch will not be used anymore.

|
|


March 2020: **new accepted papers using NetworKit**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- "Scaling up Network Centrality Computations - a Brief Overview" was accepted for publishing in the journal `it - Information Technology <https://www.degruyter.com/view/journals/itit/62/1/itit.62.issue-1.xml>`_.
- "Scaling Betweenness Approximation to Billions of Edges by MPI-based Adaptive Sampling" accepted for `IPDPS 2020 <http://www.ipdps.org>`_.

|
|

March 1, 2020: **NetworKit 6.1.0 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In the following you see an overview about the contributions, which went into NetworKit 6.1.0. Note that this version is fully compatible with release 6.0.0. 

:underline:`New features`

- Introducing new iterators for nodes and edges to have a coherent, idiomatic and fast way to repeate tasks for different elements of a graph. Syntax-wise the iterators can be called similarly in Python and C++. In Python iterating can be invoked by :code:`for x in graph.iterNodes()`, whereas the counter-part for C++ works with :code:`for(node x: graph.nodeRange())`. Internally, all functions in NetworKit already use the new iterators.
- cmake adds more options to support variants of clang-compilers with OpenMP for macOS and Linux. This includes conda, homebrew and MacPort-environments.


:underline:`Bugfixes`

- Generating a graph with the Watts-Strogatz algorithm does not lead anymore to infinite loops, when passing a number of neighbors per node, which is equal to the total number of nodes in the graph. (See issue `#505 <https://github.com/networkit/networkit/issues/505>`_) 
- Fixed error in function inNeighbors, including not all parameters in call to underlying library. (See issue `#469 <https://github.com/networkit/networkit/issues/469>`_)
- The z-coordinate is now correctly scaled when writing a graph to GML. (See issue `#500 <https://github.com/networkit/networkit/issues/500>`_)
- ConnectedComponents::extractLargestConnectedComponent now returns a compacted graph if called with appropriate parameters.


:underline:`Deprecated features`

- Nested-parallelism-feature is now marked as deprecated.

|
|

February 24, 2020: **NetworKit 6.0.1 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:underline:`Patch notes`

- Added an option to cmake (-DNETWORKIT_EXT_TLX), which enables to link against an externally built tlx-library
- Updated travis-configuration in order to remove deprecated options
- Fixed a `bug <https://github.com/networkit/networkit/issues/491>`_, which prevented the headers from ttmath to be installed correctly

|
|

November 29, 2019: **NetworKit 6.0 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:underline:`New features`

- NetworKit binary graphs: new binary graph format that is both smaller usually smaller than text-based formats and also faster to read. The format allows for parallel reading. It supports (un-)directed as well as (un-)weighted graphs and deleted nodes.
- KadabraBetweenness: implementation of a new parallel algorithm for betweenness approximation. This is based on the definition from "Parallel Adaptive Sampling with almost no Synchronization", A. van der Grinten, E. Angriman, H. Meyerhenke
- New method in ConnetedComponents to extract the largest connected component of a given graph.
- BidirectionalBFS and BidirectionalDijkstra: new algorithms for faster graph exploration when the target vertex is known.
- New method in Graph to remove all duplicate edges (i.e. additional edges with same source and same target as another edge).
- New notebooks with tutorials for Centrality, Community detection, Components, Distance, Generators, Graph, Graph read/write, Randomization.
- Removal of deprecated features (see list below for more informations)
- New release cycle and version numbering: NetworKit now releases a major release every half a year, and an optional minor release every quarter. See you in summer 2020 for NetworKit 7.0 then.
- Package Manager support: conda, spack, brew and more packages will be created starting with 6.0. They will follow the github/PyPI-release in the coming weeks.


:underline:`New features for developers`

- Clang format: new .clang-format configuration file to format NetworKit C++ files.
- Header files: all C++ header files have been moved to the include/ directory.

:underline:`Notable bugfixes`

- "make install" and "ninja install" now correctly install the NetworKIt C++ library together with its header files. The pkg-config utility is supported to link against the library.
- NetworKit now always logs to stderr instead of stdout (regardless of the log level). This change makes life easier for programs that link against NetworKit as a library but also need to adhere to a specific output format on stdout.
- ApproxGroupBetweenness now uses much less memory and can scale to larger graphs.

:underline:`Deprecated features`

- The following Graph methods have been deprecated: getId, typ, setName, getName, toString, nodes, edges, neighbors, time, timeStep.
- The following Graph methods have been deprecated and moved to GraphTools: copyNodes, subgraphFromNodes, transpose, BFSfrom, DFSfrom. toUnweighted, toUndirected, append, merge, volume
- A deprecated constructor of the KONECTGraphReader class has been removed.
- The deprecated FrutchermanReingold, and MultilevelLayouter algorithms have been removed.
- The deprecated MaxClique algorithm has been removed.
- The deprecated SSSP::getStack() method has been removed.
- The following deprecated methods in Graph have been removed: addNode(float, float), setCoordinate, getCoordinate, minCoordinate, maxCoordinate, initCoordinate

|
|


November 2019: new accepted papers using NetworKit
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
- "Local Search for Group Closeness Maximization on Big Graphs", accepted for `IEEE BigData 2019 <http://bigdataieee.org/BigData2019/>`_.
- "Group Centrality Maximization for Large-scale Graphs" accepted for `ALENEX 2020 <https://www.siam.org/conferences/cm/conference/alenex20>`_.
- "Guidelines for Experimental Algorithmics: A Case Study in Network Analysis" was accepted and published by the open-access journal *Algorithms*. It is part of the Special Issue: "Algorithm Engineering: Towards Practically Efficient Solutions to Combinatorial" edited by Daniele Frigioni and Mattia D'Emidio. More information can be found here: https://www.mdpi.com/1999-4893/12/7/127.
- "Parallel Adaptive Sampling with almost no Synchronization" accepted for `Euro-Par 2019 <https://2019.euro-par.org/>`_.
- "Scalable Katz Ranking Computation in Large Static and Dynamic Graphs" accepted for `Esa 2018 <http://algo2018.hiit.fi/esa/>`_.
- "Parallel and I/O-efficient Randomisation of Massive Networks using Global Curveball Trades" accepted for `Esa 2018 <http://algo2018.hiit.fi/esa/>`_.
- "The Polynomial Volume Law of Complex Networks in the Context of Local and Global Optimization" in `Scientific Reports <https://www.nature.com/articles/s41598-018-29131-0>`_.
- "Computing Top-k Closeness Centrality in Fully-dynamic Graphs" accepted for `ALENEX 2018 <https://archive.siam.org/meetings/alenex18/>`_.

|
|

December 19, 2018: **NetworKit 5.0 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Major features:

- New algorithm for approximating of the betweenness centrality of all the nodes of a graph or of the top-k nodes with highest betweenness centrality based on: "KADABRA is an ADaptive Algorithm for Betweenness via Random Approximation", M. Borassi, E. Natale. Presented at ESA 2016.
- New Mocnik graph generator based on: "Modelling Spatial Structures", F.B. Mocnik, A. Frank. Presented at COSIT 2015.
- New build system based on CMake.
- Support for C++ build on Windows.

Minor changes:

- Parallel Erdos Reny graph generator.
- NetworKit installation via pip: missing packages will be automatically downloaded.
- Partition: equality between partitions can be quickly checked via hashing.
- Closeness: generalized definition of Closeness centrality so it can be computed also on disconnected graphs.
- Aux::PrioQueue allows read access to its elements via iterators.
- Graph class: new reductions allow to compute the maximum (weighted) degree of a graph in parallel.

|
|

June 25, 2018: **NetworKit 4.6 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Today we announce the next version of NetworKit, the open-source toolkit for large-scale network analysis.
NetworKit is a Python package, with performance-critical algorithms implemented in C++/OpenMP.

**Release notes**

Major features:

- Dynamic algorithm for keeping track of k nodes with highest closeness centrality (based on “Computing Top-k Closeness Centrality in Fully-dynamic Graphs”, P. Bisenius, E. Bergamini, E. Angriman and H. Meyerhenke. Presented at ALENEX 2018).
- Dynamic algorithm to keep track of k nodes with highest Katz centrality (based on “Scalable Katz Ranking Computation in Large Static and Dynamic Graphs”, A. van der Grinten, E. Bergamini, O. Green, D. A. Bader and H. Meyerhenke.).
- Curveball graph randomization algorithm based on “Parallel and I/O-efficient Randomisation of Massive Networks using Global Curveball Trades”, C. J. Carstens, M. Hamann, U. Meyer, M. Penschuck, H. Tran and D. Wagner.
- Algorithm for finding the group of nodes with highest betweenness centrality (based  on “Scalable Betweenness Centrality Maximization via Sampling”, A. Mahmoody, C. E. Tsourakakis, E. Upfal).
- Algorithm for finding the group of nodes with highest group degree based on the definition in “The Centrality of Groups and Classes”, M.G. Everett, S.P. Borgatti.
- Algorithm for finding all the biconnected components of a graph based on “Algorithm 447: efficient algorithms for graph manipulation”, J. Hopcroft, R. Tarjan.
- Support for binary graph I/O: Support for graphs exported by Thrill (see https://github.com/thrill/thrill), and Implementation of binary partition readers and writers that are potentially faster than their text-based counterparts.

Minor changes:

- All algorithms for finding the top-k (harmonic) closeness can also return all the nodes whose centrality is equal to the k-th highest. This behaviour can be triggered by parameter passed in the constructor of the class.
- Faster KONECT and SNAP graph readers: roughly 2x speedup on the previous readers.
- Greatly improved running time of NetworKit’s unit tests.
- Size reduction of the “input” folder. In case of space constraints, we suggest to do a shallow clone of the NetworKit repository: git clone --depth=1 http://github.com/networkit/networkit

|
|

December 14, 2017: **NetworKit 4.5 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Today we announce the next version of NetworKit, the open-source toolkit for large-scale network analysis. NetworKit is a Python package, with performance-critical algorithms implemented in C++/OpenMP.

**Release notes**

Major:

- Algorithm for finding the group of nodes with highest closeness centrality (based on “Scaling up Group Closeness Maximization”, E. Bergamini, T. Gonser and H. Meyerhenke. To appear at ALENEX 2018).
- Dynamic algorithm for updating the betweenness of a single node faster than updating it for all nodes (based on “Improving the betweenness centrality of a node by adding links”, E. Bergamini, P. Crescenzi, G. D’Angelo, H. Meyerhenke, L. Severini and Y. Velaj. Accepted by JEA).
- Dynamic algorithm for keeping track of k nodes with highest closeness centrality (based on “Computing Top-k Closeness Centrality in Fully-dynamic Graphs”, P. Bisenius, E. Bergamini, E. Angriman and H. Meyerhenke. To appear at ALENEX 2018).

Minor:

- Dynamic algorithm for updating the weakly connected components of a directed graph after edge additions or removals.
- Official support for Windows 10. Take a look at the `Get Started guide <https://networkit.github.io/get_started.html>`_ for further instructions.
- Support for SCons3. There are no more dependencies on Python 2 if you decide to use SCons3 with Python 3.
- Improved include of external libraries. These can now simply be specified in the build.conf file. See `Pull Request #58 <https://github.com/networkit/networkit/pull/58>`_ for further details.

|
|

September 06, 2017: **NetworKit 4.4 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Today we announce the next version of NetworKit, the open-source toolkit for large-scale network analysis. NetworKit is a Python package, with performance-critical algorithms implemented in C++/OpenMP.

**Release notes**

Major:

- Weakly connected components (components.WeaklyConnectedComponents)
- Dynamic algorithm for updating connected components in undirected graphs (components.DynConnectedComponents)
- Algorithm for computing the weakly connected components in directed graphs (components.WeaklyConnectedComponents)
- Enumeration of all simple paths between two nodes, up to a user-specified threshold (distance.AllSimplePaths)

Minor:

- Improved documentation
- Marked SSSP::getStack() as deprecated and replaced with SSSP::getNodesSortedByDistance()
- Several fixes in the LFR generator
- Added a wrapper class for the BTER implementation FEASTPACK
- Expose restoreNode method to Python
- Added shared library option to SCons

|
|

July 19, 2017: **NetworKit Day** on September 12, 2017
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The first NetworKit Day will be held on September 12, 2017 at the Karlsruhe Institute of Technology, Karlsruhe, Germany. For further information, visit the webpage https://networkit.github.io/networkit-day.html

|
|

June 07, 2017: **NetworKit 4.3 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Today we announce the next version of NetworKit, the open-source toolkit for large-scale network analysis. NetworKit is a Python package, with performance-critical algorithms implemented in C++/OpenMP.

**Release notes**

Major:

- New dynamic algorithm for updating exact betweenness centrality after an edge insertion, based on “Faster Betweenness Centrality Updates in Evolving Networks”, Bergamini et al., to appear at SEA 2017 (https://arxiv.org/abs/1704.08592)
- New dynamic algorithm for updating APSP after an edge insertion (this is basically the first step of the dynamic betweenness algorithm, with the difference that only distances are updated, and not the number of shortest paths)
- New faster algorithm for listing all maximal cliques, based on “Listing All Maximal Cliques in Large Sparse Real-World Graphs”, Eppstein and Strash, SEA 2011 (https://link.springer.com/chapter/10.1007/978-3-642-20662-7_31)

Minor:

- New base class DynAlgorithm with a common interface for all dynamic algorithms.
- Jupyter Notebook explaining how to use dynamic algorithms in NetworKit.
- Renamed ApproxBetweenness2 to EstimateBetweenness.
- Moved SSSP, DynSSSP and subclasses to distance module.
- Refactored PrioQueue and PrioQueueForInts to have a common interface.
- Made deletion of incident edges automatic when deleting a node.
- Fixed minor issues and improved documentation of several classes.
- Exported Graph::randomEdge(s) to Python.
- Marked IndependentSetFinder, FruchtermanReingold, Layouter, MultilevelLayouter, RandomSpanningTree, PseudoRandomSpanningTree and MaxClique as deprecated.

NOTE: The classes marked as deprecated will be permanently deleted with the next release. Please contact us if there are reasons why some of the classes should be kept.

|
|

March 29, 2017: **Publication accepted at SEA 2017**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Our paper on computing betweenness centrality in dynamic networks using NetworKit (authors: Bergamini, Meyerhenke, Ortmann, Slobbe) has been accepted for publication at the 16th International Symposium on Experimental Algorithms (SEA17).

|
|

February 25, 2017: **Migration to GitHub**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The NetworKit team is happy to announce that the NetworKit project has been successfully migrated to GitHub. Please join
us on

https://github.com/networkit/networkit

We believe the migration will make it easier for developers to contribute to the project and we hope to bring the advantages of efficient large-scale network analysis to even more people.

|
|

December 13, 2016: **NetworKit 4.2 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Today we announce the next version of NetworKit, the open-source toolkit for large-scale network analysis. NetworKit is a Python package, with performance-critical algorithms implemented in C++/OpenMP.

**Release notes**

Major:

- New graph drawing algorithm for the Maxent-stress model; the algorithm can layout even large graphs quickly. It follows the paper by Gansner et al. with some modifications; the biggest deviation is the use of the LAMG solver for the Laplacian linear systems
- Parallel implementation for the approximation of the neighborhood function; class has been refactored from ApproxNeighborhoodFunction to NeighborhoodFunctionApproximation.
- New heuristic algorithm for the neighborhood function. It is based on sampling and the breadth-first search and offers more flexibility with regards to the tradeoff between running time and accuracy as the number of samples can be specified by the user. It is also much faster than the approximation algorithm for networks with a high diameter (e.g. road networks).

Minor:

- Iterative implementation of components.StronglyConnectedComponents, which is now the new default. For graphs where edges have been deleted, it is recommended to use the recursive implementation, which is still available.
- Removed heuristic for vertex diameter estimation from centrality.ApproxBetweenness (now the vertex diameter is estimated as suggested in Riondato, Kornaropoulos: Fast approximation of betweenness centrality through sampling)
- Refactoring of the approximation algorithms in the distance group. ApproxNAME -> NAMEApproximation.
- Simplified installation procedure: Install required dependencies automatically

|
|

July 06, 2016: **Publication accepted at CSC 2016**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Our paper on approximating current-flow closeness centrality using NetworKit (authors: Bergamini, Wegner, Lukarski, Meyerhenke) has been accepted for publication at the 7th SIAM Workshop on Combinatorial Scientific Computing (CSC16). |br| |br|

|
|

July 05, 2016: **NetworKit 4.1.1 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This is a more of a maintenance release, that fixes the pip package and building with clang is possible again (at least with version 3.8).

Note: You can control which C++ compiler the setup.py of the networkit package is supposed to use with e.g. :code:`CXX=clang++ pip install networkit`. This may be helpful when the setup fails to detect the compiler.

|
|

June 23, 2016: **NetworKit 4.1 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Today we announce the next version of NetworKit, the open-source toolkit for large-scale network analysis.
NetworKit is a Python package, with performance-critical algorithms implemented in C++/OpenMP.

**Release notes**

Major:

new website

C++ implementation of Lean Algebraic Multigrid (LAMG) by Livne et al.
for solving large Laplacian systems serves as backend for various
network analysis kernels

centrality module

-  centrality.TopCloseness: Implementation of a new algorithm for
   finding the top-k nodes with highest closeness centrality faster than
   computing it for all nodes (E. Bergamini, M. Borassi, P. Crescenzi,
   A. Marino, H. Meyerhenke, "Computing Top-k Closeness Centrality
   Faster in Unweighted Graphs", ALENEX'16)

generator module:

-  generator.HyperbolicGenerator: a fast parallel generator for complex
   networks based on hyperbolic geometry (Looz, Meyerhenke, Prutkin '15:
   Random Hyperbolic Graphs in Subquadratic Time)

|  

   
Minor:

re-introduced an overview(G)-function that collects and prints some
infromation about a graph

updated documentation

some IO bugfixes

graph module:

-  Subgraph class has been removed, its functionality is now in
   Graph::subgraphFromNodes(...)

generator module: 

-  Many graph generators now provide fit(G) method that returns an
   instance of the generator such that generated graphs are similar to
   the provided one
-  Improved performance of the BarabasiAlbert generator by implementing
   Batagelj's method

distance module:

-  distance.CommuteTimeDistance: a node distance measure, distance is
   low when there are many short paths connecting two nodes
-  Adapted Diameter class to Algorithm convention; diameter algorithm
   can be chosen via enum in the constructor
-  Adapted EffectiveDiameter class to Algorithm convention resulting in
   the classes ApproxEffectiveDiameter, ApproxHopPlot,
   ApproxNeighborhoodFunction; added exact computation of the
   Neighborhood Function

centrality module:

-  centrality.SpanningEdgeCentraliy: edge centrality measure
   representing the fraction of spanning trees containing the edge
-  centrality.ApproxCloseness: new algorithm for approximating closeness
   centrality based on "Computing Classic Closeness Centrality, at
   Scale", Cohen et al.

|
|

May 9, 2016: **NetworKit journal paper accepted at Network Science**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Our paper describing NetworKit as a toolkit for large-scale complex network analysis has been accepted by the Cambridge University Press journal Network Science. |br| |br|

|
|

Apr 12, 2016: **Publication accepted at SNAM**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Our paper on sparsification methods for social networks with NetworKit (authors: Linder, Staudt, Hamann, Meyerhenke, Wagner) has been accepted for publication in Social Network Analysis and Mining. |br| |br|

|
|

Apr 12, 2016: **Publication accepted at Internet Mathematics**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Our paper on approximating betweenness centrality in dynamic networks with NetworKit (authors: Bergamini, Meyerhenke) has been accepted for publication in Internet Mathematics. |br| |br|

|
|

Nov 16, 2016: **Publication accepted at ALENEX16**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Our paper on finding the top-k nodes with highest closeness centrality with NetworKit (authors: Bergamini, Borassi, Crescenzi, Marino, Meyerhenke) has been accepted at the 18th Meeting on Algorithm Engineering and Experiments, ALENEX 2016. |br| |br|

|
|

Nov 10, 2015: **NetworKit 4.0 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We have just released NetworKit 4.0. Apart from several improvements to algorithms and architecture, the main feature of this release is a new front end for exploratory network analysis.

The new version is now available from the Python Package index. Try upgrading with
:code:`pip3 install —upgrade networkit` |br| |br|

|
|

Aug 19, 2015: **NetworKit 3.6 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We have released version 3.6 today. Thank you to all contributors. Here are the release notes.

*Release Notes*

Major Updates:

Link Prediction

Link prediction methods try to predict the likelihood of a future or missing connection between two nodes in a given network. The new module networkit.linkprediction contains various methods from the literature.

Edge Sparsification

Sparsification reduces the size of networks while preserving structural and statistical properties of interest. The module networkit.sparsification provides methods for rating edges by importance and then filtering globally by these scores. The methods are described in http://arxiv.org/abs/1505.00564


Further Updates:

- Improved support for directed graph in analysis algorithms
- Improved support for the Intel compiler
- Reader/writer for the GEXF (Gephi) graph file format
- EdgeListReader now reads edge list with arbitrary node ids (e.g.strings) when continuous=False; getNodeMap() returns a mapping from file node ids to graph node ids
- EdgeListReader/Writer now add weights when reading files/writing graphs to file. |br| |br|

|
|

Jun 16, 2015: **Publication accepted at ESA15**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Our paper on the approximation of betweenness centrality in fully-dynamic networks with NetworKit (authors: Bergamini, Meyerhenke) has been accepted at the 23rd European Symposium on Algorithms, ESA 2015. |br| |br|

|
|

Jun 9, 2015: **NetworKit 3.5 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We have released NetworKit 3.5 a couple days ago. Please upgrade to the latest version to receive a number of improvements. We also appreciate feedback on the new release.

*Release Notes*

This release focused on bugfixes, under-the-hood improvements and refactoring.

- Various bugfixes and stability improvements
- Abort signal handling: developed mechanism to interrupt long-running algorithms via the ctrl+C command -- already supported in community.PLM, centrality.Betweennness, centrality.ApproxBetweenness, centrality.ApproxBetweenness2, centrality.PageRank
- Efficient node and edge iteration on the Python layer: G.forEdges, G.forNodes...
- Constant-time check if a graph has self-loops: Graph.hasSelfLoops()
- networkit.setSeed: set a fixed seed for the random number generator
- Refactoring: CoreDecomposition and LocalClusteringCoefficient now in centrality module
- Refactoring: introduced Python/Cython base classes: Centrality, CommunityDetector
- Removed: CNM community detection algorithm
- The GIL (Global Interpreter Lock) is released for many algorithms in order to make it possible to execute multiple computations in parallel in a single Python process.
- Improved support for directed graphs in many algorithms |br| |br|

|
|

Dec 4, 2014: **NetworKit 3.4 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Today we have released version 3.4 of NetworKit, the open-source toolkit for high-performance network analysis. This release brings numerous critical bugfixes as well as useful incremental features and performance optimizations. We are also moving towards consistent interfaces for algorithms. We have also further simplified the installation dependencies.

Thank you to the numerous people who have contributed code to this release.

More information can be found on https://networkit.github.io/. We welcome user feedback and opportunities for collaboration.

Release Notes

Features

* graph
   * Graph can be copied on Python level
   * spanning tree/forest (graph.SpanningForest)
*  algorithms in general
   * Edmonds-Karp max flow algorithm (flow.EdmondsKarp)
   * core decomposition works for directed graphs (properties.CoreDecomposition)
   * algebraic distance, a structural distance measure in graphs (distance.AlgebraicDistance)
* IO
   * there is no longer a default graph file format
   * read and write the GML graph file format (graphio.GMLGraphReader/Writer)
   * conversion of directed to undirected graph (Graph.toUndirected)
   * reader and writer for the GraphTool binary graph format (graphio.GraphToolBinaryReader)
   * METIS graph reader supports arbitrary edge weights (graphio.METISGraphReader)
* algebraic
   * algebraic backend supports rectangular matrices (Matrix.h)
* community detection
   * turbo mode for PLM community detection algorithm gives a factor 2 speedup at the cost of more memory (community.PLM)
   * Cut Clustering community detection algorithm (community.CutClustering)
* generators
   * Erdös-Renyi generator can generate directed graphs (generators.ErdosRenyiGenerator)
   * configuration model graph generator for generating a random simple graph with exactly the given degree sequence (generators.ConfigurationModelGenerator)
   * generator for power law degree sequences (generators.PowerlawDegreeSequence)

Bugfixes

* GraphMLReader improved (graphio.GraphMLReader)
* ConnectedComponents usability improved
* KONECT reader (graphio.KONECTGraphReader)
* fixed build problem on case-insensitive file systems
* closed memory leaks by adding missing destructors on the Cython
* improved memory management by adding missing move constructors
* DynamicForestFireGenerator fixed

Refactoring

* standardization of analysis algorithm interface: parameters given by constructor, computation triggered in run method, results retrieved via getter methods
* run methods return self to allow chaining
* introducing unit tests on Python layer

Build and Installation

* pip installation does no longer require Cython
* pip installation does no longer require SCons, minimal build system as fallback if SCons is missing |br| |br|

|
|

Oct 21, 2014: **Publication accepted at ALENEX15**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Our paper on approximating betweenness centrality in dynamic networks with NetworKit (authors: Bergamini, Meyerhenke, Staudt) has been accepted at the 17th Meeting on Algorithm Engineering and Experiments, ALENEX 2015. |br| |br|

|
|

Sep 28, 2014: **NetworKit presented at summer school tutorial on network analysis**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In a joint tutorial on Algorithmic methods for network analysis with Dorothea Wagner for the summer school of the DFG priority programme Algorithm Engineering, Henning Meyerhenke introduced NetworKit to the participants. The PhD students from Germany and other European countries successfully solved various network analysis tasks with NetworKit during the tutorial. |br| |br|

|
|

Sep 28, 2014: **Publication accepted**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Our paper on selective community detection with NetworKit (authors: Staudt, Marrakchi, Meyerhenke) has been accepted at the First International Workshop on High Performance Big Graph Data Management, Analysis, and Mining (in Conjunction with IEEE BigData'14). |br| |br|

|
|

Aug 22, 2014: **NetworKit 3.3 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

NetworKit 3.3 has been released, including the following improvements to our network analysis framework:

- renamed package to "networkit" according to Python packaging convention
- restructured package to enable "pip install networkit"
- improved community detection algorithms
- improved diameter algorithms
- added support for efficient, arbitrary edge attributes via edge indexing
- Eigenvector Centrality & PageRank on basis of scipy
- spectral methods for graph partitioning  (partitioning.SpectralPartitioner), drawing  (viztools.layout.SpectralLayout) and coloring  (coloring.SpectralColoring)
- new graph generators: stochastic blockmodel (generators.StochasticBlockmodel), Watts-Strogatz model (generators.WattsStrogatzGenerator) and Forest Fire model (generators.DynamicForestFireGenerator)
- union find data structure (structures/UnionFind)
- simple spanning forest algorithm (graph.SpanningForest)
- fast algorithm for partition intersection (community/PartitionIntersection)
- hub dominance in communities (community.HubDominance)
- reader for Matlab adjacency matrices
- support for reading and writing Covers
- performance improvements in Gephi streaming interface |br| |br|

|
|

Jul 1, 2014: **NetworKit 3.2 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

NetworKit 3.2 has been released, including major improvements to our network analysis framework:

*Critical Bugfixes*

- graph data structure supports directed graphs
- optimized connected components algorithm (properties.ParallelConnectedComponents)
- faster heuristic algorithm for approximating betweenness centrality (centrality.ApproxBetweenness2)
- Gephi support: export of node attributes, Gephi streaming plugin support
- graph generators: Dorogovtsev-Mendes model
- improved portability (Windows)
- overhaul of graph file input |br| |br|

|
|

May 15, 2014: **New website online**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

NetworKit, our tool suite for high-performance network analysis, has its own website now! |br| |br|

|
|

Apr 25, 2014: **Introductory talk**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Christian Staudt gave an introductory talk about the current release of NetworKit. The slides and a video of the talk are available on the Documentation page. |br| |br|

|
|

Apr 15, 2014: **NetworKit 3.1 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Version 3.1 is an incremental update to our tool suite for high-performance network analysis. Improvements and new features include Eigenvector centrality, PageRank, Betweenness centrality approximation, R-MAT graph generator, BFS/DFS iterators, improved BFS and Dijkstra classes, and improved memory footprint when using large objects on the Python level. More detailed information can be found in the accompanying publication. |br| |br|

|
|

Mar 13, 2014: **NetworKit 3.0 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

NetworKit 3.0 is the next major release of our open-source toolkit for high-performance network analysis. Since the last release in November, NetworKit has received several improvements under the hood as well as an extension of the feature set. What started as a testbed for parallel community detection algorithms has evolved into a diverse set of tools that make it easy to characterize complex networks. This has been successfully scaled to large data sets with up to several billions of edges.

This being an open-source project, we are very interested in incorporating feedback from data analysts and algorithm engineers. Feel free to contact us with any question on how NetworKit could be applied in your field of research. |br| |br|

|
|

Nov 11, 2013: **NetworKit 2.0 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Second major release of NetworKit. The toolkit has been improved by adding several graph algorithms and an interactive shell based on Python/Cython. We begin a more frequent release cycle. |br| |br|

|
|

Mar 17, 2013: **NetworKit 1.0 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Initial release of the community detection component. With this release of NetworKit, we would like to encourage reproduction of our results, reuse of code and contributions by the community. |br| |br|
