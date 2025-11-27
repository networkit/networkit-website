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

Nov 03, 2025: **NetworKit 11.2 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:underline:`New Features`:
    - Add Python bindings for Kruskal and Prim Minimum Spanning Forest algorithms in the :code:`graph` module. Use :code:`nk.graph.KruskalMSF` and :code:`nk.graph.PrimMSF` to create an instance of the respective algorithm.


:underline:`New algorithms`:
    - Successive Shortest Path (SSP) algorithm for solving the Minimum-Cost Flow problem. The algorithm is currently only available in C++ via :code:`NetworKit::SuccessiveShortestPathMinCostFlow`. Thanks to Andreas Scharf (@Schwarf) for the contribution.
    - Dinic's blocking-flow algorithm for calculating maximum flow in directed, weighted graphs. The algorithm is currently only available in C++ via :code:`NetworKit::Dinic`. Thanks to Andreas Scharf (@Schwarf) for the contribution.
    - Floyd-Warshall algorithm for computing all-pairs shortest paths in a weighted graph. The algorithm is currently only available in C++ via :code:`NetworKit::FloydWarshall`. Thanks to Andreas Scharf (@Schwarf) for the contribution.


:underline:`Further changes and improvements`:
    - Introduce :code:`getIndicator()` in :code:`RandomMaximumSpanningForest` and :code:`UnionMaximumSpanningForest`, which is an alias for :code:`getAttribute`. :code:`getAttribute` is deprecated in order to avoid confusion with edge / node attributes in the graph datastructure.
    - Refactor :code:`addEdges()` in the Python interface of the :code:`Graph` class, such that unnecessary copies of the input edge list are avoided. As a result, there is a potential speedup when adding batches of edges to the graph. This also affects the constructor :code:`GraphFromCoo`. See `#1369 <https://github.com/networkit/networkit/pull/1369>`_ for details.

:underline:`Notable Bug-Fixes`:
    - Fix a bug in APSP algorithm, where larger matrices create an overflow of internal 32-bit helper variables when using :code:`getDistances()`. See `#1366 <https://github.com/networkit/networkit/issues/1366>`_ for details.
    - Fix a bug when writing empty graphs to NetworKitBinary files. See `#1338 <https://github.com/networkit/networkit/pull/1338>`_ for details.
    - Fix bug in :code:`ParallelLeiden`, where the algorithm could create disconnected communities. See `#1328 <https://github.com/networkit/networkit/pull/1328>`_ for details.

|
|


Mar 10, 2025: **NetworKit 11.1 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:underline:`New features`:
    - New RB-Matrix and Graph reader. It is available via :code:`nk.graphio.RBGraphReader` or :code:`nk.readGraph(path,format=nk.graphio.Format.RB)` (`#1264 <https://github.com/networkit/networkit/pull/1264>`_).
    - The MatrixMarket reader is now available in C++ and Python (`#1236 <https://github.com/networkit/networkit/pull/1236>`_, `#1262 <https://github.com/networkit/networkit/pull/1262/>`_)
    - Add new function :code:`isBipartite`, which checks whether a given undirected graph is bipartite. Currently only implemented in C++ (`#1304 <https://github.com/networkit/networkit/pull/1304>`_).
    - :code:`nk.graphtools.topologicalSort` now has an additional parameter :code:`nodeIdMap`, supplying a map of node ids, if the nodes in the graph are non-contiuous (`#1241 <https://github.com/networkit/networkit/pull/1241/>`_).
    - Refactored the existing implementation of the Barabasi-Albert graph generator, leading to a significant speedup (`#1175 <https://github.com/networkit/networkit/pull/1175>`_) for multicore systems due to parallelization. The new implementation is based on "Scalable generation of scale-free graphs" by Sanders and Schulz.
    - A similar treatment was done for RMat-Generator, the Configuration Model and the Chung-Lu Model (`#1164 <https://github.com/networkit/networkit/pull/1164>`_, `#1186 <https://github.com/networkit/networkit/pull/1186>`_, `#1177 <https://github.com/networkit/networkit/pull/1177>`_)
    - LAMG-solver now supports multiple connected components in parallel (`#1212 <https://github.com/networkit/networkit/pull/1212>`_).
    - The :code:`vizbridges` module now also supports the visualization of edge attributes (`#1230 <https://github.com/networkit/networkit/pull/1230>`_).
    - :code:`DynBetweennessOneNode` (in module :code:`centrality`) now also supports weighted graphs (`#1245 <https://github.com/networkit/networkit/pull/1245>`_).


:underline:`New algorithms`:
    - Add `Left-Right Planarity Test <https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=7963e9feffe1c9362eb1a69010a5139d1da3661e>`_ algorithm by U. Brandes, which is used to determine whether a given graph is planar. This algorithm is available in C++ in the new :code:`planarity` module. Thanks for `@Schwarf <https://github.com/Schwarf>`_ for the contribution.
    - Add b-Suitor algorithm both in a static version based on `Efficient Approx. Algorithms for weighted b-Matching <https://www.osti.gov/servlets/purl/1418504>`_ by Khan et al. and a edge dynamic version based on `A Fully-dynamic Approximation Algorithm for Maximum Weight b-Matchings in Graphs <https://arxiv.org/abs/2410.09965>`_ by Brandt-Tumescheit et al. Both algorithms are available in C++ and Python in the :code:`matching` module.


:underline:`Further changes and improvements`:
    - Python 3.13 and Numpy 2.X is fully supported, Python versions :code:`<3.10` is not supported anymore. This means, that wheels will only be available for 3.10 or higher.
    - The oldest supported compiler are now GCC 10, LLVM 10. This enables the usage of C++20 features in the code base.
    - Refactor CI pipeline (github actions) in order to detect memory leaks. As a result several minor possible leaks have been resolved (`#1283 <https://github.com/networkit/networkit/pull/1283>`_).
    - As shown by Sahu et. al in "GVE-Leiden: Fast Leiden Algorithm for Community Detection in Shared Memory Setting" the current implementation of :code:`ParallelLeiden` might create a small fraction of disconnected communities. This behaviour is now documented and will be fixed in a future update.
    - Building NetworKit via :code:`setup.py` does not anymore detect compatible compilers. This is now done in CMake directly, making the building process more robust.


:underline:`Notable Bug-Fixes`:
    - Fix attribute assignment from another attribute :code:`attr[i] = attr[j]` and general copy instructions (`#1279 <https://github.com/networkit/networkit/pull/1279>`_, `#1251 <https://github.com/networkit/networkit/pull/1251>`_).
    - Fix edge attributes indexing on dynamic graphs (edge removal, insertion) (`#1257 <https://github.com/networkit/networkit/pull/1257>`_, `#1299 <https://github.com/networkit/networkit/pull/1257>`_).
    - Fixed a bug in :code:`SignalHandler`, which led to inconsistent behavior when interrupting parallel code (`#1301 <https://github.com/networkit/networkit/pull/1301>`_).
    - Fix :code:`RMatGenerator` for instances where the number of nodes exceeded the limit of :code:`uint32_t` (`#1268 <https://github.com/networkit/networkit/pull/1268>`_).
    - Fix the product of two :code:`DynamicMatrix` instances (`#1252 <https://github.com/networkit/networkit/pull/1252>`_).
    - Fix a problem in :code:`DynDijkstra`, whereby the shortest path itself was not created properly (`#1240 <https://github.com/networkit/networkit/pull/1240>`_).
    - :code:`addEdge` now correctly adds missing nodes on dynamic graphs with id holes (`#1232 <https://github.com/networkit/networkit/pull/1232>`_).
    - :code:`networkit.community.OverlappingNMIDistance` is working again (`#1229 <https://github.com/networkit/networkit/pull/1229>`_).
    - :code:`networkit.generators.PowerlawDegreeSequence` is working again (`#1196 <https://github.com/networkit/networkit/pull/1196>`_).

|
|


Mar 15, 2024: **NetworKit Day 2024**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

As already announced - we are looking forward to a new NetworKit Day in 2024,
taking place on April 9th from 2 p.m. to 6 p.m. (CEST) online via Zoom.
Registration is mandatory (to receive the Zoom link), but free of charge.

This event is - like the previous ones - about interacting with the community.
We share our latest updates, provide insights for new users and also offer two
short tutorials: one for beginners and one for advanced users. We also intend
to discuss future development directions and receive feedback on the current
status of NetworKit.

We are also pleased to feature two invited guest talks by Jonathan Donges
(Potsdam Institute for Climate Impact Research) and Kathrin Hanauer
(University of Vienna).

The program of the event can be found on the event subpage:
https://networkit.github.io/networkit-day.html

Link for registration:
https://www.eventbrite.de/e/networkit-day-2024-nd24-tickets-825016084317

Looking forward to seeing you on April 9th!

|
|


Feb 06, 2024: **Save the Date: NetworKit Day 2024**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We are happy to announce a new NetworKit Day. The event will take place on April, 9th 2024 - starting at 1 p.m. and ending at 6 p.m CET. Details
concerning the program schedule will be shared at a later date.

Best Wishes!

|
|


Jan 30, 2024: **NetworKit 11.0 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:underline:`New features`:
    - The :code:`graphio` module now supports guessing the file format of a given graph. :code:`nk.graphio.guessFileFormat` either returns a supported
      graph format from the list (see: https://networkit.github.io/dev-docs/python_api/graphio.html#networkit.graphio.Format) or an :code:`IOError`.
      This functionality is used now, if a graph is read by :code:`graphio.readGraph` without giving the file format. See the corresponding
      IO-notebook for more information about the usage.
    - The graph datastructure now supports :code:`EdgeAttributes`. These can be attached/removed/edited similarly to node attributes via Python and
      C++.
    - Refactored :code:`Matrices` from the :code:`algebraic` module. This includes rewriting certain functions and adding new functionality. For
      :code:`CSRMatrix`: functions for iterating over all elements of the matrix, including zeros. For :code:`DenseMatrix`: functions to compute the
      adjacency, Laplacian, and incidence matrix of a graph and a diagonal matrix. For :code:`DynamcMatrix`: functions to iterate over the (non-zero)
      elements. In this way, all matrix classes offer the same set of APIs.
    - A graph can now be constructed from several numpy/scipy data types, including :code:`scipy.sparse.coo_matrix`. The new function is available via
      :code:`nk.GraphFromCoo`. See the corresponding graph-notebook for more information about the usage.
    - The new constructor uses :code:`graph.addEdges` underneath, which is also now available via the Python interface. Based on several numpy/scipy
      data sources, multiple edges can be added. This method has increased performance (5x-10x) with respect to manually creating the graph and adding edges in
      a loop. 
    - The :code:`plot` module in Python was completely rewritten, since most of its functionality was outdated. In addition a notebook is added,
      reflecting the changes.


:underline:`New algorithms (distance)`:
    - Dynamic 2-Hop Landmark Labeling based on https://dl.acm.org/doi/10.1145/3299901 . The current implementation is only partially dynamic, since
      only edge insertions are supported.
    - Complex Paths algorithm based on https://www.nature.com/articles/s41467-021-24704-6 and the original implementation from
      https://github.com/drguilbe/complexpaths.git . The algorithm is part of the :code:`centrality` module and available in C++ and Python. 

:underline:`Further changes and improvements`:
    - Python 3.12 is now fully supported.
    - :code:`compactEdges()` is now marked as deprecated, since there can not be any holes for missing edges in the data structure anymore. The
      underlying idea of keeping a consistent datastructure (maintaining ordering of edges / correct indexes of edge ids) after dynamic graph updates
      has been moved to new functions :code:`setKeepEdgesSorted()` and :code:`setMaintainCompactEdges()`. These functions set variables, which
      influence running time consuming sanity checks during :code:`removeEdge`. Per default the variables are set to :code:`false` and it is only
      needed to activate them for advanced use cases.   
    - Several deprecated functions are removed entirely or are now integrated in different modules with release 11.0. Some smaller or outdated helper
      modules like :code:`stopwatch` are also removed without replacements. This concerns mostly the Python interface. 
    - Supported compiler now include GCC 13 and Clang 17. Note that compiler older than five years are not officially supported anymore (no changes
      with respect to release 10.1 of NetworKit).
    - The :code:`NetworKitBinary` writer now converts older binary formats (:code:`<3`) automatically to the most recent version 3. With respect to
      previous versions, version 3 supports edge ids.
    - The running time of :code:`HyperbolicGenerator` is improved slightly by using an algorithm, which generates sequences of sorted random numbers.
    - Functions :code:`RandomEdgeScore::score`, :code:`RandomNodeEdgeScore::score` and :code:`Sfigality::maximum` are now implemented.
    - A new notebook is added, describing the usage of dynamic algorithms in NetworKit. It is available via github and the documentation page.

:underline:`Notable Bug-Fixes`:
    - Fixed a bug in :code:`DGSWriter`, where node restoration events were not correctly written to files.
    - Fixed functions :code:`communicationGraph` and :code:`weightedDegreeWithCluster` from :code:`GraphClusteringTools` to return correct data types
      (directed/weighted).
    - Subtraction of two :code:`DenseMatrix` now works correctly.
    - Fixed the previously broken :code:`community.SpectralPartitioner`.
    - :code:`community.kCoreCommunityDetection` gives now correct results.
    - Fixed a heap corruption bug due to missing parameters in the Python interface of :code:`KadabraBetweenness`.
    - Fixed a bug in :code:`BiconnectedComponents`, where the result of the algorithm was incorrect after a node got deleted from the graph data
      structure.
    - Removed a race condition from :code:`Luby` algorithm, leading to erroneous results. As a result, the performance of the algorithm has decreased
      (2-3x loss of speedup).

|
|

Mar 23, 2023: **NetworKit 10.1 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:underline:`New features`:
    - :code:`TopCloseness` and :code:`TopHarmonicCloseness` now support restriction of the top-k calculation to certain nodes (while the truth is
      given by the complete graph). This can lead to significant speed-up in running time.
    - It is now possible to let :code:`Graph.addEdge()` check for multi-edges when adding new edges. This is disabled by default, since it has an
      impact on the running time of :code:`addEdge()`. The return type changed to indicate whether the edge was added or not.
    - :code:`Node2Vec` now also supports directed graphs. This was a contribution from Klaus Ahrens (@fidus58).
    - Edge weights in a graph can now be randomized by calling :code:`GraphTools::randomizeWeights()` (C++) or
      :code:`networkit.graphtools.randomizeWeights()`. The C++ API also supports adding a custom distribution.

:underline:`New algorithms (distance)`:
    - New algorithm: Pruned Landmark Labeling based on T. Akiba, Y. Iwata, Y. Yoshida, SIGMOD '13. The algorithm computes distance labels which are
      used to answer shortest-path distance queries.

:underline:`Further changes and improvements`:
    - Python 3.11 is now fully supported. With release 10.1 onward, a wheel for Linux, macOS and Windows will be available via all distribution
      channels.
    - Supported compiler now include GCC 12.0 and Clang 15.0. Note that compiler older than five years are not officially supported anymore. This now
      includes Clang :code:`<6.0` and GCC :code:`<8.1` (with the exception of :code:`7.4`).
    - Calling names for enums in both Python and C++ is now unified. Before the change, different enums were written with different naming schemes
      (for example: ClosenessVariant::standard, ClosenessType::OUTBOUND). Also naming scheme between Python and C++ differed in various cases. The new
      convention is: :code:`CamelCase` for identifiers and :code:`SCREAMING_SNAKE_CASE` for members. For backwards compatibility all previous calling
      conventions still work (for two releases).
    - In addition all enums in Python are now callable as member of their module. For example: :code:`networkit.centrality.ClosenessType.OUTBOUND`.
    - Previously non-existing edge ids were returned as 0 which could be misleading. Now they return as :code:`none` to be clear that the edge id
      doesn't exist. See https://github.com/networkit/networkit/issues/747 for details.
    - For :code:`SpanningEdgeCentrality`, it is now mandatory to index the edges before running the algorithm. See
      https://github.com/networkit/networkit/issues/967 for details.
    - Improved :code:`MatrixMarketReader` now supports :code:`%`-comments and warns for potential data loss for edge weights bigger than
      :code:`4.5*10^15`.


:underline:`Notable Bug-Fixes`:
    - Fixed bug in :code:`ParallelConnectedComponents`, which lead to occasional segmentation faults in the member function `getComponents()`.
    - :code:`Graph` constructor now supports creation of graphs with indexed edges by passing :code:`edgesIndexed=True`. Before the fix doing so led
      to segmentation faults.
    - Fixed bug for source-target shortest path algorithms (:code:`MultiTargetBFS`, :code:`MultiTargetDijkstra`), which caused segmentation faults
      when passing unreachable targets.
    - Fixed inconsistent weights for graphs created by :code:`GraphTools::toUndirected()`/:code:`graphtools.toUndirected()`. Error occured when
      converting bidirectional edges. Fixed behavior per default creates an undirected edge with the summed up weight of both edges.
    - Fix a potential bug in PLP. A variable was updated non-atomically in a parallel loop, which can lead to a possible race condition.
    - Fixed :code:`NetworkBinaryWriter` error, which led to erroneous graph files when writing graphs with deleted nodes (e.g. by calling
      :code:`G::removeNode(u)`).
    - Fix EdmondsKarp :code:`getMaxFlow()` (for directed graphs) and :code:`getSourceSet()` (for directed/undirected graphs). This is a contribution
      from Jonas Charfreitag (@CharJon).

|
|

May 18, 2022: **NetworKit 10.0 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:underline:`New features`:
    - Native support for node attributes. In C++ the attributes can be of any type. Python does not support generic data types; thus, NetworKit node
      attributes in Python are restriced to type :code:`int`, :code:`float`, and :code:`str`, and may be subject to changes in the future. See
      https://networkit.github.io/dev-docs/python_api/graph.html#networkit.graph.Graph.attachNodeAttribute for details. The attribute API is still
      considered experimental and may change in the future.
    - New Python module :code:`vizbridges`: provides functions for 2D and 3D graph visualization (via Cytoscape/Plotly) within Jupyter Notebooks. See
      the documentation and our example notebooks for more details. Module :code:`csbridge` is deprecated in favor of vizbridges and respective
      functionality is moved there. An application built on top of vizbridges is described in "Interactive Visualization of Protein RINs using
      NetworKit in the Cloud" (E. Angriman, F. Brandt-Tumescheit, L. Franke, A. van der Grinten, H. Meyerhenke).

:underline:`New algorithms (centrality)`:
    - New algorithm for computing the Local Clustering Coefficient based on squares. This is a contribution from Till Hoffmann (@tillahoffmann) from
      Harvard T.H. Chan School of Public Health.
    - New algorithm for Forest Closeness Centrality based on "New Approximation Algorithms for Forest Closeness Centrality - for Individual Vertices
      and Vertex Groups", A. van der Grinten, E. Angriman, M. Predari, H. Meyerhenke, SDM21.

:underline:`Further changes and improvements`:
    - C++ standard updated to version 17, oldest supported compilers are Clang 5.0, GCC 7 (and equivalent MSVC, AppleClang).
    - APSP: support for graphs with non-existing nodes.
    - SPSP: support for a list of target nodes; the algorithm stops once all target nodes have been visited.
    - Distance module: all algorithms support returning distances as a numpy array (via :code:`getDistances()`), which is more efficient than
      returning Python lists. The new approach also enables straightforward consumption of centrality scores by numpy-compatible APIs and may be
      enabled by default in the future. This is a contribution from Till Hoffmann (@tillahoffmann) from Harvard T.H. Chan School of Public Health.
    - Dynamics module: possibility to compare graph events via binary operators, available both in C++ and Python.
    - Generators module: removal of the quadratic version of the Barabasi Albert Generator. See https://github.com/networkit/networkit/issues/787 for
      details.
    - Graph class: the algorithm to compute Kruskal Minimum Spanning Forest now uses the SpanningForest algorithm for undirected graphs. This leads to
      a general performance improvement.
    - Deprecation of several Python modules: :code:`csbridge`, :code:`exceptions`, :code:`GEXFIO`, :code:`GraphMLIO`, :code:`partitioning`,
      :code:`sampling`, :code:`stopwatch`, :code:`viztasks`, :code:`workflows`. Note that some functionalities are moved to other modules. See
      documentation of further details.
    - Improvement of the Python documentation. Doc-strings now report input parameters, return values, and inheritance relationship.
    - Python APIs for the Maxent-Stress layout algorithm now support 3D coordinates.

:underline:`Notable Bug-Fixes`:
    - Fixed bug in the dynamic Dijkstra implementation (after an edge update, some distances were not updated correctly).

|
|

March 14, 2022: **New paper using NetworKit**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The paper `Interactive Visualization of Protein RINs using NetworKit in the Cloud <https://arxiv.org/abs/2203.01263>`_ (authors: E. Angriman, F.
Brandt-Tumescheit, L. Franke, A. van der Grinten and H. Meyerhenke) has been accepted for IPDPS workshop on Graphs, Architectures, Programming, and
Learning (`GrAPL 2022 <https://hpc.pnl.gov/grapl/>`_). In the paper NetworKit is used for near realtime manipulation and visualization of protein
networks. A basic version of the visualization tool using `Plotly <https://plotly.com>`_ for generating 2D and 3D visualizations of networks will be
integrated in future releases.

|
|

February 8, 2022: **NetworKit Day 2022 - March 3rd**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Dear (prospective and current) NetworKit users and developers,

as already announced at a previous date - we are looking forward to a new NetworKit Day in 2022, taking place on March 3rd from 1 p.m. to 5 p.m. (CET)
online via Zoom. Registration is mandatory, but free of charge. This event is - as the previous ones - about interacting with the community. We share
our latest updates, give insights for new users and also offer two workshops: one for beginners and one for advanced users. If you want to attend one
or more workshops, better be prepared with a notebook and a modern webbrowser (although it is only for convenience, not a requirement). We also intend
to discuss future development directions and receive feedback on the current status of NetworKit. NetworKit Day will also feature one scientific talk
by Rob Kooij from TU Delft (Netherlands) about "Robustness of Complex Networks".

The program of the event can be found on our NetworKit Day subpage.

:underline:`Link for registration:` https://www.eventbrite.de/e/networkit-day-2022-nd22-registration-261084148717

Looking forward to seeing you on March 3rd!

|
|

December 20, 2021: **Save the Date: NetworKit Day 2022**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We are happy to announce a new NetworKit Day. The event will take place on March, 3rd 2022 - starting at 1 p.m. and ending at 6 p.m CET. Details
concerning the program schedule will be shared at a later date.

Wish you all a good holiday season!

|
|

December 14, 2021: **NetworKit 9.1.1 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:underline:`New features`
    - Wheels: NetworKit is now available as pre-built wheel-packages for nearly all supported platforms via pip. In case you prefer to build the C++
      core and extensions, use :code:`pip install --no-binary networkit`.
    - M1 macOS: support for install NetworKit as a native package via pip. 

:underline:`New algorithms`

Community:
    - New overlapping community detection algorithm LFM (Local Fitness Method), available in :code:`centrality.LFM`. This is contribution from J.
      Gelhausen (KIT Karlsruhe)
    - New parallel version of Leiden-based community detection algorithm, available in :code:`community.ParallelLeiden`. This is a contribution from
      F. Nguyen (KIT Karlsruhe).
 
GraphTools:
    - New function topologicalSort: returns a list of nodes sorted by a valid topological ordering, available in :code:`graphtools.topologicalSort`.
    
:underline:`Further changes and improvements`
    - :code:`NetworkBinaryReader/Writer`: support for reading/writing edge indices and pickling graphs.
    - Improved performance for :code:`CSRMatrix` functions sort() and diagonal().
    - Improved performance for Vector function :code:`mean()`.
    - Improved performance for :code:`Graphbuilder` (only available in C++).
    - Improvements to the documentation, available at https://networkit.github.io/dev-docs/index.html
    - Support for clang-13.

:underline:`Notable Bug-Fixes`
    - Fixed a rare bug in :code:`centrality.GroupClosenessLocalSearch`, which could lead to worse solutions.
    - Fixed :code:`coloring.SpectralColoring()` by adjusting scipy-imports.
    - Fixed a problem for the experimental Windows support, where the wrong Python-libs are linked when multiple Python-versions are installed.

|
|

July 1, 2021: **NetworKit 9.0 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:underline:`New feature`
    - Windows 7, 8.1 and 10: possibility to install NetworKit via pip. Currently we have no pre-built wheel-package available so you have to make sure
      that the MSVC-compiler (cl.exe) can be found when installing NetworKit via pip. A possible solution is to call "pip" from within "Native Tools
      Command Prompt" provided by Visual Studio. This feature will be further improved in the future.


:underline:`New algorithms`

Centrality:
    - Greedy algorithm for group harmonic closeness based on "Group-Harmonic and Group-Closeness Maximization - Approximation and Engineering", E.
      Angriman, R. Becker, G. D'Angelo, H. Gilbert, A. van der Grinten, H. Meyerhenke, ALENEX 2021. This algorithm is available in
      :code:`networkit.centrality.GroupHarmonicCloseness`.
    - Local search approximation algorithm for group closeness based on the aforementioned ALENEX 2021 paper. This algorithm is available in
      :code:`networkit.centrality.GroupClosenessLocalSearch`.
    - Heuristic algorithm for group closeness (LS-Restrict) based on "Local Search for Group Closeness Maximization on Big Graphs", E.Angriman, A. van
      der Grinten, H. Meyerhenke, IEEE BigData 2019. This algorithm is available in :code:`networkit.centrality.GroupClosenessLocalSwaps`.
    - New algorithm for Normalized PageRank based on "Comparing Apples and Oranges: Normalized PageRank for Evolving Graphs", K. Berberich, S.
      Bedathur, G. Weikum, M. Vazirgiannis, WWW 2007. The algorithm is available in :code:`networkit.centrality.PageRank`.

Community Detection:
    - Based on Map Equation, available via :code:`networkit.community.LouvainMapEquation`. For further information about the algorithm, see "The map
      equation", M. Rosvall, D. Axelsson, C. T. Bergstrom, EPJ ST 2009.
    -  Based on Overlapping Normalized Mutual Information, from the paper  "Normalized Mutual Information to Evaluate Overlapping", A. McDaid, D.
       Greene, N. Hurley, Physics and Society 2011. This algorithm is available in :code:`networkit.community.OverlappingNMIDistance`.

Matching:
    - Suitor matcher, based on "New Effective Multithreaded Matching Algorithms", F. Manne and M. Halappanavar, IPDPS 2014. This algorithm is
      available in :code:`networkit.matching.SuitorMatcher`.

GraphTools:
    - New function :code:`subgraphFromNodes`: returns an induced subgraph based on an input graph
    - The previous :code:`subgraphFromNodes` has been renamed to :code:`subgraphAndNeighborsFromNodes` in order to better reflect its functionality


:underline:`Further changes and improvements`
    - Template implementation of CSRMatrix
    - Clang-analyzer warnings are fixed and treated as errors
    - Improved performance of graph writers
    - Possibility to try-out NetworKit without installation: binder support + cloud instances
    - Optimized memory usage in LAMG and ConjugateGradient
    - Improved runtime of (parallel) coarsening implementation for clusterings
    - Improved runtime of isProper() for matching
    - Support for clang-12 and gcc-11 compilers
    - AVX2 support for Windows

|
|

February 23, 2021: **NetworKit 8.1 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:underline:`New features`

- New embedding module that implements the node2vec algorithm based on "node2vec: Scalable feature learning for networks" by Grover and Leskovec (KDD
  2016). The embedding module is available for both C++ and Python.
- New csbridge Python module that allows to draw colored graphs inline in a jupyter notebook via ipycytoscape.
- Better implementation of :code:`ClusterRandomGraphGenerator`: now it takes linear time and supports parallelism.
- Added support for Binder. Newer branches from NetworKit can now be accessed directly from Binder. Currently supported are master (newest stable) and
  8.1 (release version).

:underline:`For developers`

- We raised the minimum required clang version from 3.8 to 3.9.
- It is now possible to create the Python package against an external pre-build tlx-library. To use it, add :code:`--external-tlx=<TLX_PATH>` to
  :code:`setup.py build_ext-phase`.
- All clang-tidy warnings have been resolved and will be treated as errors by our CI pipeline. Some of the clang-tidy checks also involve possible
  performance enhancements and/or lowering of the memory footprint by avoiding unnecessary copies. The exact benefit depends on the use-case.
- Several warning and documentation fixes.

:underline:`Notable bugfixes`

- When using custom compilers on macOS (for example homebrew gcc compiler) and NetworKit was built from source with an external core, this created a
  NetworKit installation with incompatible core and cython-extension libraries.
- In :code:`KatzCentrality`, the parameter alpha was set to 0 by default. This caused the edges to be ignored and every node got the same centrality.

|
|

January 15, 2021: **New paper using NetworKit**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The paper "New Approximation Algorithms for Forest Closeness Centrality - for Individual Vertices and Vertex Groups" (authors: van der Grinten,
Angriman, Predari, Meyerhenke) was selected for publication by `SIAM Data Mining 2021 <https://www.siam.org/conferences/cm/conference/sdm21>`_. In the
paper NetworKit is used for computing the experimental data. We also plan to include the new Forest Closeness Centrality algorithms in future
releases.

|
|

December 18, 2020: **NetworKit 8.0 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:underline:`New features`

- Possibility to specify edge directions for Katz centrality
- New algorithm to approximate Electrical Closeness, based on `Approximation of the Diagonal of a Laplacian's Pseudoinverse for Complex Network
  Analysis <https://drops.dagstuhl.de/opus/volltexte/2020/12872/pdf/LIPIcs-ESA-2020-6.pdf>`_ by E. Angriman, A. van der Grinten, M. Predari and H.
  Meyerhenke
- New algorithm: SPSP (Some Pairs Shortest Paths), as APSP but with user-specified source vertices

:underline:`New features for Contributors / Developers`

- We moved our continious integration testing from Travis-CI to Github Actions. While the test-coverage stays the same, testing time is significantly
  reduced. This results in faster feedback for your pull requests.
- Based on our rule to support compilers which are 5 years old, the minimum support for gcc was raised to version 5.
- NetworKit now support C++14 features.

:underline:`Further Improvements`

- The documentation is improved and includes rendering-fixes, when dealing with certain elements like formulas.
- Refactored :code:`Betweenness` and :code:`ApproxBetweenness`, leading to improved parallel performance.

|
|

September 08, 2020: **NetworKit 7.1 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:underline:`New features for Contributors / Developers`

- We restructured the Cython-Interface (responsible for the connection between Python and C++ core-libraries) in order to make development and
  maintenance more approachable. As a result the previous monolithic file :code:`_NetworKit.pyx` is now split into modules, resembling the structure
  of the C++ code. New modules can be added easily by providing appropriate Cython-files in sub-folder `networkit
  <https://github.com/networkit/networkit/tree/master/networkit>`_.

:underline:`Further Improvements`

- Refactored the `EdgeListReader`, leading to a speed-up when reading in edge-list based graph files.

:underline:`Additional Notes`

- Beginning with release :code:`7.1` (:code:`7.0` also available) NetworKit is now also distributed via package managers conda, spack and brew. All
  channels provide different packages for the C++ headers/library and the complete Python/C++ software. Head over to `github
  <https://github.com/networkit/networkit>`_ for installation instructions.

|
|


May 29, 2020: **NetworKit 7.0 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:underline:`New Features`

- New algorithms for GedWalk centrality based on the paper `Group Centrality Maximization for Large-scale Graphs <https://arxiv.org/abs/1910.13874>`_
  (ALENEX 2020).
- New parallel implementation of the `Hayashi et al. algorithm <https://www.ijcai.org/Proceedings/16/Papers/525.pdf>`_ for spanning edge centrality
  approximation.
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

- "Scaling up Network Centrality Computations - a Brief Overview" was accepted for publishing in the journal `it - Information Technology
  <https://www.degruyter.com/view/journals/itit/62/1/itit.62.issue-1.xml>`_.
- "Scaling Betweenness Approximation to Billions of Edges by MPI-based Adaptive Sampling" accepted for `IPDPS 2020 <http://www.ipdps.org>`_.

|
|

March 1, 2020: **NetworKit 6.1.0 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In the following you see an overview about the contributions, which went into NetworKit 6.1.0. Note that this version is fully compatible with release
6.0.0.

:underline:`New features`

- Introducing new iterators for nodes and edges to have a coherent, idiomatic and fast way to repeate tasks for different elements of a graph.
  Syntax-wise the iterators can be called similarly in Python and C++. In Python iterating can be invoked by :code:`for x in graph.iterNodes()`,
  whereas the counter-part for C++ works with :code:`for(node x: graph.nodeRange())`. Internally, all functions in NetworKit already use the new
  iterators.
- cmake adds more options to support variants of clang-compilers with OpenMP for macOS and Linux. This includes conda, homebrew and
  MacPort-environments.


:underline:`Bugfixes`

- Generating a graph with the Watts-Strogatz algorithm does not lead anymore to infinite loops, when passing a number of neighbors per node, which is
  equal to the total number of nodes in the graph. (See issue `#505 <https://github.com/networkit/networkit/issues/505>`_)
- Fixed error in function inNeighbors, including not all parameters in call to underlying library. (See issue `#469
  <https://github.com/networkit/networkit/issues/469>`_)
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

- NetworKit binary graphs: new binary graph format that is both smaller usually smaller than text-based formats and also faster to read. The format
  allows for parallel reading. It supports (un-)directed as well as (un-)weighted graphs and deleted nodes.
- KadabraBetweenness: implementation of a new parallel algorithm for betweenness approximation. This is based on the definition from "Parallel
  Adaptive Sampling with almost no Synchronization", A. van der Grinten, E. Angriman, H. Meyerhenke
- New method in ConnetedComponents to extract the largest connected component of a given graph.
- BidirectionalBFS and BidirectionalDijkstra: new algorithms for faster graph exploration when the target vertex is known.
- New method in Graph to remove all duplicate edges (i.e. additional edges with same source and same target as another edge).
- New notebooks with tutorials for Centrality, Community detection, Components, Distance, Generators, Graph, Graph read/write, Randomization.
- Removal of deprecated features (see list below for more informations)
- New release cycle and version numbering: NetworKit now releases a major release every half a year, and an optional minor release every quarter. See
  you in summer 2020 for NetworKit 7.0 then.
- Package Manager support: conda, spack, brew and more packages will be created starting with 6.0. They will follow the github/PyPI-release in the
  coming weeks.


:underline:`New features for developers`

- Clang format: new .clang-format configuration file to format NetworKit C++ files.
- Header files: all C++ header files have been moved to the include/ directory.

:underline:`Notable bugfixes`

- "make install" and "ninja install" now correctly install the NetworKIt C++ library together with its header files. The pkg-config utility is
  supported to link against the library.
- NetworKit now always logs to stderr instead of stdout (regardless of the log level). This change makes life easier for programs that link against
  NetworKit as a library but also need to adhere to a specific output format on stdout.
- ApproxGroupBetweenness now uses much less memory and can scale to larger graphs.

:underline:`Deprecated features`

- The following Graph methods have been deprecated: getId, typ, setName, getName, toString, nodes, edges, neighbors, time, timeStep.
- The following Graph methods have been deprecated and moved to GraphTools: copyNodes, subgraphFromNodes, transpose, BFSfrom, DFSfrom. toUnweighted,
  toUndirected, append, merge, volume
- A deprecated constructor of the KONECTGraphReader class has been removed.
- The deprecated FrutchermanReingold, and MultilevelLayouter algorithms have been removed.
- The deprecated MaxClique algorithm has been removed.
- The deprecated SSSP::getStack() method has been removed.
- The following deprecated methods in Graph have been removed: addNode(float, float), setCoordinate, getCoordinate, minCoordinate, maxCoordinate,
  initCoordinate

|
|


November 2019: new accepted papers using NetworKit
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
- "Local Search for Group Closeness Maximization on Big Graphs", accepted for `IEEE BigData 2019 <http://bigdataieee.org/BigData2019/>`_.
- "Group Centrality Maximization for Large-scale Graphs" accepted for `ALENEX 2020 <https://www.siam.org/conferences/cm/conference/alenex20>`_.
- "Guidelines for Experimental Algorithmics: A Case Study in Network Analysis" was accepted and published by the open-access journal *Algorithms*. It
  is part of the Special Issue: "Algorithm Engineering: Towards Practically Efficient Solutions to Combinatorial" edited by Daniele Frigioni and
  Mattia D'Emidio. More information can be found here: https://www.mdpi.com/1999-4893/12/7/127.
- "Parallel Adaptive Sampling with almost no Synchronization" accepted for `Euro-Par 2019 <https://2019.euro-par.org/>`_.
- "Scalable Katz Ranking Computation in Large Static and Dynamic Graphs" accepted for `Esa 2018 <http://algo2018.hiit.fi/esa/>`_.
- "Parallel and I/O-efficient Randomisation of Massive Networks using Global Curveball Trades" accepted for `Esa 2018
  <http://algo2018.hiit.fi/esa/>`_.
- "The Polynomial Volume Law of Complex Networks in the Context of Local and Global Optimization" in `Scientific Reports
  <https://www.nature.com/articles/s41598-018-29131-0>`_.
- "Computing Top-k Closeness Centrality in Fully-dynamic Graphs" accepted for `ALENEX 2018 <https://archive.siam.org/meetings/alenex18/>`_.

|
|

December 19, 2018: **NetworKit 5.0 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Major features:

- New algorithm for approximating of the betweenness centrality of all the nodes of a graph or of the top-k nodes with highest betweenness centrality
  based on: "KADABRA is an ADaptive Algorithm for Betweenness via Random Approximation", M. Borassi, E. Natale. Presented at ESA 2016.
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
Today we announce the next version of NetworKit, the open-source toolkit for large-scale network analysis. NetworKit is a Python package, with
performance-critical algorithms implemented in C++/OpenMP.

**Release notes**

Major features:

- Dynamic algorithm for keeping track of k nodes with highest closeness centrality (based on “Computing Top-k Closeness Centrality in Fully-dynamic
  Graphs”, P. Bisenius, E. Bergamini, E. Angriman and H. Meyerhenke. Presented at ALENEX 2018).
- Dynamic algorithm to keep track of k nodes with highest Katz centrality (based on “Scalable Katz Ranking Computation in Large Static and Dynamic
  Graphs”, A. van der Grinten, E. Bergamini, O. Green, D. A. Bader and H. Meyerhenke.).
- Curveball graph randomization algorithm based on “Parallel and I/O-efficient Randomisation of Massive Networks using Global Curveball Trades”, C. J.
  Carstens, M. Hamann, U. Meyer, M. Penschuck, H. Tran and D. Wagner.
- Algorithm for finding the group of nodes with highest betweenness centrality (based  on “Scalable Betweenness Centrality Maximization via Sampling”,
  A. Mahmoody, C. E. Tsourakakis, E. Upfal).
- Algorithm for finding the group of nodes with highest group degree based on the definition in “The Centrality of Groups and Classes”, M.G. Everett,
  S.P. Borgatti.
- Algorithm for finding all the biconnected components of a graph based on “Algorithm 447: efficient algorithms for graph manipulation”, J. Hopcroft,
  R. Tarjan.
- Support for binary graph I/O: Support for graphs exported by Thrill (see https://github.com/thrill/thrill), and Implementation of binary partition
  readers and writers that are potentially faster than their text-based counterparts.

Minor changes:

- All algorithms for finding the top-k (harmonic) closeness can also return all the nodes whose centrality is equal to the k-th highest. This
  behaviour can be triggered by parameter passed in the constructor of the class.
- Faster KONECT and SNAP graph readers: roughly 2x speedup on the previous readers.
- Greatly improved running time of NetworKit’s unit tests.
- Size reduction of the “input” folder. In case of space constraints, we suggest to do a shallow clone of the NetworKit repository: git clone
  --depth=1 http://github.com/networkit/networkit

|
|

December 14, 2017: **NetworKit 4.5 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Today we announce the next version of NetworKit, the open-source toolkit for large-scale network analysis. NetworKit is a Python package, with
performance-critical algorithms implemented in C++/OpenMP.

**Release notes**

Major:

- Algorithm for finding the group of nodes with highest closeness centrality (based on “Scaling up Group Closeness Maximization”, E. Bergamini, T.
  Gonser and H. Meyerhenke. To appear at ALENEX 2018).
- Dynamic algorithm for updating the betweenness of a single node faster than updating it for all nodes (based on “Improving the betweenness
  centrality of a node by adding links”, E. Bergamini, P. Crescenzi, G. D’Angelo, H. Meyerhenke, L. Severini and Y. Velaj. Accepted by JEA).
- Dynamic algorithm for keeping track of k nodes with highest closeness centrality (based on “Computing Top-k Closeness Centrality in Fully-dynamic
  Graphs”, P. Bisenius, E. Bergamini, E. Angriman and H. Meyerhenke. To appear at ALENEX 2018).

Minor:

- Dynamic algorithm for updating the weakly connected components of a directed graph after edge additions or removals.
- Official support for Windows 10. Take a look at the `Get Started guide <https://networkit.github.io/get_started.html>`_ for further instructions.
- Support for SCons3. There are no more dependencies on Python 2 if you decide to use SCons3 with Python 3.
- Improved include of external libraries. These can now simply be specified in the build.conf file. See `Pull Request #58
  <https://github.com/networkit/networkit/pull/58>`_ for further details.

|
|

September 06, 2017: **NetworKit 4.4 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Today we announce the next version of NetworKit, the open-source toolkit for large-scale network analysis. NetworKit is a Python package, with
performance-critical algorithms implemented in C++/OpenMP.

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

The first NetworKit Day will be held on September 12, 2017 at the Karlsruhe Institute of Technology, Karlsruhe, Germany. For further information,
visit the webpage https://networkit.github.io/networkit-day.html

|
|

June 07, 2017: **NetworKit 4.3 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Today we announce the next version of NetworKit, the open-source toolkit for large-scale network analysis. NetworKit is a Python package, with
performance-critical algorithms implemented in C++/OpenMP.

**Release notes**

Major:

- New dynamic algorithm for updating exact betweenness centrality after an edge insertion, based on “Faster Betweenness Centrality Updates in Evolving
  Networks”, Bergamini et al., to appear at SEA 2017 (https://arxiv.org/abs/1704.08592)
- New dynamic algorithm for updating APSP after an edge insertion (this is basically the first step of the dynamic betweenness algorithm, with the
  difference that only distances are updated, and not the number of shortest paths)
- New faster algorithm for listing all maximal cliques, based on “Listing All Maximal Cliques in Large Sparse Real-World Graphs”, Eppstein and Strash,
  SEA 2011 (https://link.springer.com/chapter/10.1007/978-3-642-20662-7_31)

Minor:

- New base class DynAlgorithm with a common interface for all dynamic algorithms.
- Jupyter Notebook explaining how to use dynamic algorithms in NetworKit.
- Renamed ApproxBetweenness2 to EstimateBetweenness.
- Moved SSSP, DynSSSP and subclasses to distance module.
- Refactored PrioQueue and PrioQueueForInts to have a common interface.
- Made deletion of incident edges automatic when deleting a node.
- Fixed minor issues and improved documentation of several classes.
- Exported Graph::randomEdge(s) to Python.
- Marked IndependentSetFinder, FruchtermanReingold, Layouter, MultilevelLayouter, RandomSpanningTree, PseudoRandomSpanningTree and MaxClique as
  deprecated.

NOTE: The classes marked as deprecated will be permanently deleted with the next release. Please contact us if there are reasons why some of the
classes should be kept.

|
|

March 29, 2017: **Publication accepted at SEA 2017**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Our paper on computing betweenness centrality in dynamic networks using NetworKit (authors: Bergamini, Meyerhenke, Ortmann, Slobbe) has been accepted
for publication at the 16th International Symposium on Experimental Algorithms (SEA17).

|
|

February 25, 2017: **Migration to GitHub**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The NetworKit team is happy to announce that the NetworKit project has been successfully migrated to GitHub. Please join us on

https://github.com/networkit/networkit

We believe the migration will make it easier for developers to contribute to the project and we hope to bring the advantages of efficient large-scale
network analysis to even more people.

|
|

December 13, 2016: **NetworKit 4.2 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Today we announce the next version of NetworKit, the open-source toolkit for large-scale network analysis. NetworKit is a Python package, with
performance-critical algorithms implemented in C++/OpenMP.

**Release notes**

Major:

- New graph drawing algorithm for the Maxent-stress model; the algorithm can layout even large graphs quickly. It follows the paper by Gansner et al.
  with some modifications; the biggest deviation is the use of the LAMG solver for the Laplacian linear systems
- Parallel implementation for the approximation of the neighborhood function; class has been refactored from ApproxNeighborhoodFunction to
  NeighborhoodFunctionApproximation.
- New heuristic algorithm for the neighborhood function. It is based on sampling and the breadth-first search and offers more flexibility with regards
  to the tradeoff between running time and accuracy as the number of samples can be specified by the user. It is also much faster than the
  approximation algorithm for networks with a high diameter (e.g. road networks).

Minor:

- Iterative implementation of components.StronglyConnectedComponents, which is now the new default. For graphs where edges have been deleted, it is
  recommended to use the recursive implementation, which is still available.
- Removed heuristic for vertex diameter estimation from centrality.ApproxBetweenness (now the vertex diameter is estimated as suggested in Riondato,
  Kornaropoulos: Fast approximation of betweenness centrality through sampling)
- Refactoring of the approximation algorithms in the distance group. ApproxNAME -> NAMEApproximation.
- Simplified installation procedure: Install required dependencies automatically

|
|

July 06, 2016: **Publication accepted at CSC 2016**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Our paper on approximating current-flow closeness centrality using NetworKit (authors: Bergamini, Wegner, Lukarski, Meyerhenke) has been accepted for
publication at the 7th SIAM Workshop on Combinatorial Scientific Computing (CSC16). |br| |br|

|
|

July 05, 2016: **NetworKit 4.1.1 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This is a more of a maintenance release, that fixes the pip package and building with clang is possible again (at least with version 3.8).

Note: You can control which C++ compiler the setup.py of the networkit package is supposed to use with e.g. :code:`CXX=clang++ pip install networkit`.
This may be helpful when the setup fails to detect the compiler.

|
|

June 23, 2016: **NetworKit 4.1 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Today we announce the next version of NetworKit, the open-source toolkit for large-scale network analysis. NetworKit is a Python package, with
performance-critical algorithms implemented in C++/OpenMP.

**Release notes**

Major:

new website

C++ implementation of Lean Algebraic Multigrid (LAMG) by Livne et al. for solving large Laplacian systems serves as backend for various network
analysis kernels

centrality module

-  centrality.TopCloseness: Implementation of a new algorithm for finding the top-k nodes with highest closeness centrality faster than computing it
   for all nodes (E. Bergamini, M. Borassi, P. Crescenzi, A. Marino, H. Meyerhenke, "Computing Top-k Closeness Centrality Faster in Unweighted
   Graphs", ALENEX'16)

generator module:

-  generator.HyperbolicGenerator: a fast parallel generator for complex networks based on hyperbolic geometry (Looz, Meyerhenke, Prutkin '15: Random
   Hyperbolic Graphs in Subquadratic Time)

|  

   
Minor:

re-introduced an overview(G)-function that collects and prints some infromation about a graph

updated documentation

some IO bugfixes

graph module:

-  Subgraph class has been removed, its functionality is now in Graph::subgraphFromNodes(...)

generator module: 

-  Many graph generators now provide fit(G) method that returns an instance of the generator such that generated graphs are similar to the provided
   one
-  Improved performance of the BarabasiAlbert generator by implementing Batagelj's method

distance module:

-  distance.CommuteTimeDistance: a node distance measure, distance is low when there are many short paths connecting two nodes
-  Adapted Diameter class to Algorithm convention; diameter algorithm can be chosen via enum in the constructor
-  Adapted EffectiveDiameter class to Algorithm convention resulting in the classes ApproxEffectiveDiameter, ApproxHopPlot,
   ApproxNeighborhoodFunction; added exact computation of the Neighborhood Function

centrality module:

-  centrality.SpanningEdgeCentraliy: edge centrality measure representing the fraction of spanning trees containing the edge
-  centrality.ApproxCloseness: new algorithm for approximating closeness centrality based on "Computing Classic Closeness Centrality, at Scale", Cohen
   et al.

|
|

May 9, 2016: **NetworKit journal paper accepted at Network Science**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Our paper describing NetworKit as a toolkit for large-scale complex network analysis has been accepted by the Cambridge University Press journal
Network Science. |br| |br|

|
|

Apr 12, 2016: **Publication accepted at SNAM**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Our paper on sparsification methods for social networks with NetworKit (authors: Linder, Staudt, Hamann, Meyerhenke, Wagner) has been accepted for
publication in Social Network Analysis and Mining. |br| |br|

|
|

Apr 12, 2016: **Publication accepted at Internet Mathematics**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Our paper on approximating betweenness centrality in dynamic networks with NetworKit (authors: Bergamini, Meyerhenke) has been accepted for
publication in Internet Mathematics. |br| |br|

|
|

Nov 16, 2016: **Publication accepted at ALENEX16**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Our paper on finding the top-k nodes with highest closeness centrality with NetworKit (authors: Bergamini, Borassi, Crescenzi, Marino, Meyerhenke) has
been accepted at the 18th Meeting on Algorithm Engineering and Experiments, ALENEX 2016. |br| |br|

|
|

Nov 10, 2015: **NetworKit 4.0 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We have just released NetworKit 4.0. Apart from several improvements to algorithms and architecture, the main feature of this release is a new front
end for exploratory network analysis.

The new version is now available from the Python Package index. Try upgrading with :code:`pip3 install —upgrade networkit` |br| |br|

|
|

Aug 19, 2015: **NetworKit 3.6 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We have released version 3.6 today. Thank you to all contributors. Here are the release notes.

*Release Notes*

Major Updates:

Link Prediction

Link prediction methods try to predict the likelihood of a future or missing connection between two nodes in a given network. The new module
networkit.linkprediction contains various methods from the literature.

Edge Sparsification

Sparsification reduces the size of networks while preserving structural and statistical properties of interest. The module networkit.sparsification
provides methods for rating edges by importance and then filtering globally by these scores. The methods are described in
http://arxiv.org/abs/1505.00564


Further Updates:

- Improved support for directed graph in analysis algorithms
- Improved support for the Intel compiler
- Reader/writer for the GEXF (Gephi) graph file format
- EdgeListReader now reads edge list with arbitrary node ids (e.g.strings) when continuous=False; getNodeMap() returns a mapping from file node ids to
  graph node ids
- EdgeListReader/Writer now add weights when reading files/writing graphs to file. |br| |br|

|
|

Jun 16, 2015: **Publication accepted at ESA15**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Our paper on the approximation of betweenness centrality in fully-dynamic networks with NetworKit (authors: Bergamini, Meyerhenke) has been accepted
at the 23rd European Symposium on Algorithms, ESA 2015. |br| |br|

|
|

Jun 9, 2015: **NetworKit 3.5 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We have released NetworKit 3.5 a couple days ago. Please upgrade to the latest version to receive a number of improvements. We also appreciate
feedback on the new release.

*Release Notes*

This release focused on bugfixes, under-the-hood improvements and refactoring.

- Various bugfixes and stability improvements
- Abort signal handling: developed mechanism to interrupt long-running algorithms via the ctrl+C command -- already supported in community.PLM,
  centrality.Betweennness, centrality.ApproxBetweenness, centrality.ApproxBetweenness2, centrality.PageRank
- Efficient node and edge iteration on the Python layer: G.forEdges, G.forNodes...
- Constant-time check if a graph has self-loops: Graph.hasSelfLoops()
- networkit.setSeed: set a fixed seed for the random number generator
- Refactoring: CoreDecomposition and LocalClusteringCoefficient now in centrality module
- Refactoring: introduced Python/Cython base classes: Centrality, CommunityDetector
- Removed: CNM community detection algorithm
- The GIL (Global Interpreter Lock) is released for many algorithms in order to make it possible to execute multiple computations in parallel in a
  single Python process.
- Improved support for directed graphs in many algorithms |br| |br|

|
|

Dec 4, 2014: **NetworKit 3.4 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Today we have released version 3.4 of NetworKit, the open-source toolkit for high-performance network analysis. This release brings numerous critical
bugfixes as well as useful incremental features and performance optimizations. We are also moving towards consistent interfaces for algorithms. We
have also further simplified the installation dependencies.

Thank you to the numerous people who have contributed code to this release.

More information can be found on https://networkit.github.io/. We welcome user feedback and opportunities for collaboration.

Release Notes

Features

* graph
   * Graph can be copied on Python level
   * spanning tree/forest (graph.SpanningForest)
*  algorithms in general * Edmonds-Karp max flow algorithm (flow.EdmondsKarp) * core decomposition works for directed graphs
   (properties.CoreDecomposition) * algebraic distance, a structural distance measure in graphs (distance.AlgebraicDistance)
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
   * configuration model graph generator for generating a random simple graph with exactly the given degree sequence
     (generators.ConfigurationModelGenerator)
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

* standardization of analysis algorithm interface: parameters given by constructor, computation triggered in run method, results retrieved via getter
  methods
* run methods return self to allow chaining
* introducing unit tests on Python layer

Build and Installation

* pip installation does no longer require Cython
* pip installation does no longer require SCons, minimal build system as fallback if SCons is missing |br| |br|

|
|

Oct 21, 2014: **Publication accepted at ALENEX15**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Our paper on approximating betweenness centrality in dynamic networks with NetworKit (authors: Bergamini, Meyerhenke, Staudt) has been accepted at the
17th Meeting on Algorithm Engineering and Experiments, ALENEX 2015. |br| |br|

|
|

Sep 28, 2014: **NetworKit presented at summer school tutorial on network analysis**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In a joint tutorial on Algorithmic methods for network analysis with Dorothea Wagner for the summer school of the DFG priority programme Algorithm
Engineering, Henning Meyerhenke introduced NetworKit to the participants. The PhD students from Germany and other European countries successfully
solved various network analysis tasks with NetworKit during the tutorial. |br| |br|

|
|

Sep 28, 2014: **Publication accepted**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Our paper on selective community detection with NetworKit (authors: Staudt, Marrakchi, Meyerhenke) has been accepted at the First International
Workshop on High Performance Big Graph Data Management, Analysis, and Mining (in Conjunction with IEEE BigData'14). |br| |br|

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
- spectral methods for graph partitioning  (partitioning.SpectralPartitioner), drawing  (viztools.layout.SpectralLayout) and coloring
  (coloring.SpectralColoring)
- new graph generators: stochastic blockmodel (generators.StochasticBlockmodel), Watts-Strogatz model (generators.WattsStrogatzGenerator) and Forest
  Fire model (generators.DynamicForestFireGenerator)
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

Christian Staudt gave an introductory talk about the current release of NetworKit. The slides and a video of the talk are available on the
Documentation page. |br| |br|

|
|

Apr 15, 2014: **NetworKit 3.1 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Version 3.1 is an incremental update to our tool suite for high-performance network analysis. Improvements and new features include Eigenvector
centrality, PageRank, Betweenness centrality approximation, R-MAT graph generator, BFS/DFS iterators, improved BFS and Dijkstra classes, and improved
memory footprint when using large objects on the Python level. More detailed information can be found in the accompanying publication. |br| |br|

|
|

Mar 13, 2014: **NetworKit 3.0 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

NetworKit 3.0 is the next major release of our open-source toolkit for high-performance network analysis. Since the last release in November,
NetworKit has received several improvements under the hood as well as an extension of the feature set. What started as a testbed for parallel
community detection algorithms has evolved into a diverse set of tools that make it easy to characterize complex networks. This has been successfully
scaled to large data sets with up to several billions of edges.

This being an open-source project, we are very interested in incorporating feedback from data analysts and algorithm engineers. Feel free to contact
us with any question on how NetworKit could be applied in your field of research. |br| |br|

|
|

Nov 11, 2013: **NetworKit 2.0 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Second major release of NetworKit. The toolkit has been improved by adding several graph algorithms and an interactive shell based on Python/Cython.
We begin a more frequent release cycle. |br| |br|

|
|

Mar 17, 2013: **NetworKit 1.0 released**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Initial release of the community detection component. With this release of NetworKit, we would like to encourage reproduction of our results, reuse of
code and contributions by the community. |br| |br|
